// Netlify Function: OpenAI Proxy
// This function safely calls OpenAI API with your key stored in environment variables

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { topic, tone } = JSON.parse(event.body);

    if (!topic || !tone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing topic or tone' })
      };
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error: missing API key' })
      };
    }

    const systemPrompt = `You are a helpful assistant specialized in Korean culture. Generate short, engaging social media posts (2-4 sentences each) for sharing Korean culture with international audiences.

Output ONLY valid JSON with this exact structure:
{
  "ko": "Korean text here (2-4 sentences)",
  "en": "English text here (2-4 sentences)",
  "brief": "One sentence explanation in English"
}

Topic: ${topic}
Tone: ${tone}

Make it authentic, culturally accurate, and engaging for social media.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Generate a ${tone} post about ${topic}.` }
        ],
        max_tokens: 400,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenAI API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    // Try to parse JSON from response
    let result;
    try {
      result = JSON.parse(content);
    } catch (e) {
      // Try to extract JSON
      const match = content.match(/\{[\s\S]*\}/);
      if (match) {
        result = JSON.parse(match[0]);
      } else {
        throw new Error('Invalid JSON from OpenAI');
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};