// Example: Modified script.js for using serverless functions
// Replace the callOpenAI function in script.js with one of these:

// ============================================================================
// FOR NETLIFY
// ============================================================================
/*
async function callOpenAI(apiKey, topic, tone) {
  // When using Netlify Functions, we don't need the API key in browser
  // The key is stored securely in Netlify environment variables
  
  try {
    const response = await fetch('/.netlify/functions/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topic, tone })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Function error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Netlify Function Error:', error);
    throw error;
  }
}
*/

// ============================================================================
// FOR VERCEL
// ============================================================================
/*
async function callOpenAI(apiKey, topic, tone) {
  // When using Vercel Functions, we don't need the API key in browser
  // The key is stored securely in Vercel environment variables
  
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topic, tone })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Function error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Vercel Function Error:', error);
    throw error;
  }
}
*/

// ============================================================================
// USAGE INSTRUCTIONS
// ============================================================================
/*

1. Choose your deployment platform (Netlify or Vercel)
2. Copy the appropriate function above
3. Replace the existing callOpenAI function in script.js
4. Remove or hide the API key input field in index.html (optional)
5. Deploy to your chosen platform
6. Set OPENAI_API_KEY environment variable in platform dashboard

Benefits:
- API key never exposed to browser
- No CORS issues
- More secure
- Rate limiting can be added server-side

Note: The API key input field in the UI becomes unnecessary when using
serverless functions, but we keep it for backward compatibility and
local testing with sample texts.

*/