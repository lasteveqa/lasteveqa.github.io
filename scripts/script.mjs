import dotenv from 'dotenv';
dotenv.config();

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}.${date}.${year}`;
}

document.getElementById("horo-date").textContent = getDate();



function goToInfo(itemName) {
  // Store the selected item in sessionStorage
  sessionStorage.setItem('selectedItem', itemName);

  // Navigate to the item page
  window.location.href = 'pages/Info.html';
}
  const selectedItem = sessionStorage.getItem('selectedItem');

  document.getElementById('horo-label').innerHTML = selectedItem;


  if(document.getElementById('text').textContent == "Loading...")
  {
    document.getElementById('footer').style.height = '300px';
  }
  else document.getElementById('footer').style.height = '100px';



  

// Your OpenAI API key
const apiKey = process.env.API_KEY;

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