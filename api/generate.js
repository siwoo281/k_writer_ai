// Vercel Serverless Function: OpenAI Proxy
// This function safely calls OpenAI API with your key stored in environment variables

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { topic, tone } = req.body;

    if (!topic || !tone) {
      return res.status(400).json({ error: 'Missing topic or tone' });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Server configuration error: missing API key' });
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

    return res.status(200).json(result);

  } catch (error) {
    console.error('Function error:', error);
    return res.status(500).json({ error: error.message });
  }
}