
import dotenv from 'dotenv';
dotenv.config();

document.addEventListener("DOMContentLoaded", function() {

  // Your OpenAI API key
   const apiKey = process.env.API_KEY;

  const selectedItem = sessionStorage.getItem('selectedItem');

  // API endpoint
  const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct-0914/completions';

  // Text prompt
  const prompt = 'Give me fictional horoscope for' + selectedItem + 'for today';

  // Number of tokens to generate
  const maxTokens = 250;

  // Fetch options
  const fetchOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          prompt: prompt,
          max_tokens: maxTokens
      })
  };

  // Fetch data from OpenAI API
  fetch(apiUrl, fetchOptions)
      .then(response => response.json())
      .then(data => {
          // Extract generated text from the response
          const generatedText = data.choices[0].text;

          // Display the generated text on the page
          document.getElementById('text').innerText = generatedText;
      })
      .catch(error => console.error('Error:', error));
});