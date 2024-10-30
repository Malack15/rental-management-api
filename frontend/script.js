// js/script.js

const API_URL = 'http://localhost:5000';

// Registration form submission
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role })
    });

    if (response.ok) {
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    } else {
      const data = await response.json();
      alert(`Registration failed: ${data.message || 'Error'}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Login form submission
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'dashboard.html';
    } else {
      alert(`Login failed: ${data.message || 'Error'}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Dashboard: Load properties if token is present
async function loadProperties() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/properties`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (response.ok) {
      const properties = await response.json();
      const propertyList = document.getElementById('propertyList');
      propertyList.innerHTML = properties.map(property => `
        <div class="property">
          <h3>${property.title}</h3>
          <p>${property.description}</p>
          <p>Price: $${property.price}</p>
          <p>Landlord: ${property.landlord.name}</p>
        </div>
      `).join('');
    } else {
      alert('Failed to load properties');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Load properties on the dashboard
if (window.location.pathname.endsWith('dashboard.html')) {
  loadProperties();
}

// Logout functionality
document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'login.html';
});
