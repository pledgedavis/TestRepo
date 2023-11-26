const apiUrl = 'https://frontend-take-home-service.fetch.com';

// Function to handle user login
async function loginUser(name, email) {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
      credentials: 'include', // Include credentials (cookies) in the request
    });

    if (response.ok) {
      console.log('Login successful!');
      // You can perform additional actions after successful login
      // For example, fetch and display dogs
      fetchAndDisplayDogs();
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
}

// Function to fetch and display a list of dogs
async function fetchAndDisplayDogs() {
  try {
    const response = await fetch(`${apiUrl}/dogs/search?size=5`, {
      credentials: 'include', // Include credentials (cookies) in the request
    });

    if (response.ok) {
      const data = await response.json();
      displayDogs(data.resultIds);
    } else {
      console.error('Failed to fetch dogs');
    }
  } catch (error) {
    console.error('Error during fetchDogs:', error);
  }
}

// Function to display the list of dogs
function displayDogs(dogIds) {
  const dogResultsDiv = document.getElementById('dog-results');
  dogResultsDiv.innerHTML = '<h2>Available Dogs</h2>';

  // Iterate through the dog IDs and fetch individual dog details
  dogIds.forEach(async (dogId) => {
    const dogData = await fetchDogDetails(dogId);
    const dogElement = createDogElement(dogData);
    dogResultsDiv.appendChild(dogElement);
  });
}

// Function to fetch details of an individual dog
async function fetchDogDetails(dogId) {
  try {
    const response = await fetch(`${apiUrl}/dogs/${dogId}`, {
      credentials: 'include', // Include credentials (cookies) in the request
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(`Failed to fetch details for dog with ID ${dogId}`);
    }
  } catch (error) {
    console.error(`Error during fetchDogDetails for ID ${dogId}:`, error);
  }
}

// Function to create HTML elements for a dog
function createDogElement(dog) {
  const dogElement = document.createElement('div');
  dogElement.classList.add('dog-card');
  dogElement.innerHTML = `
    <img src="${dog.img}" alt="${dog.name}">
    <h3>${dog.name}</h3>
    <p>Breed: ${dog.breed}</p>
    <p>Age: ${dog.age} years</p>
    <p>Location: ${dog.zip_code}</p>
  `;
  return dogElement;
}