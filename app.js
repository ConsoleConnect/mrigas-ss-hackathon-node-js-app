const axios = require('axios');

// Function to retrieve data from the API
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Function to display the fetched data in the console
async function displayData() {
  const data = await fetchData();
  if (data) {
    console.log('Fetched data:', data);
  }
}

// Invoke the displayData function
displayData();
