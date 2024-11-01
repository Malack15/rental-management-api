const BASE_URL = 'http://localhost:5000';

// Helper function for navigating sections
function showSection(section) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(section).style.display = 'block';

  if (section === 'properties') loadProperties();
  else if (section === 'payments') loadPayments();
  else if (section === 'maintenance') loadMaintenanceRequests();
}

// Registration form submission
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
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
    const response = await fetch(`${BASE_URL}/auth/login`, {
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

// Properties
async function loadProperties() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASE_URL}/properties`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const properties = await response.json();
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = properties.map(prop => `
      <div class="property-card">
        <h4>${prop.name}</h4>
        <p>Location: ${prop.location}</p>
        <p>Price: $${prop.price}</p>
        <button onclick="deleteProperty('${prop._id}')">Delete</button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading properties:', error);
  }
}

async function addProperty() {
  const token = localStorage.getItem('token');
  const name = document.getElementById('propertyName').value;
  const location = document.getElementById('propertyLocation').value;
  const price = document.getElementById('propertyPrice').value;

  try {
    await fetch(`${BASE_URL}/properties`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location, price })
    });
    hidePropertyForm();
    loadProperties();
  } catch (error) {
    console.error('Error adding property:', error);
  }
}

async function deleteProperty(id) {
  const token = localStorage.getItem('token');
  try {
    await fetch(`${BASE_URL}/properties/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    loadProperties();
  } catch (error) {
    console.error('Error deleting property:', error);
  }
}

// Payments
async function loadPayments() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASE_URL}/payments`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const payments = await response.json();
    const paymentList = document.getElementById('paymentList');
    paymentList.innerHTML = payments.map(pay => `
      <div class="payment-card">
        <p>Amount: $${pay.amount}</p>
        <p>Date: ${new Date(pay.date).toLocaleDateString()}</p>
        <p>Status: ${pay.status}</p>
        <button onclick="deletePayment('${pay._id}')">Delete</button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading payments:', error);
  }
}

async function addPayment() {
  const token = localStorage.getItem('token');
  const amount = document.getElementById('paymentAmount').value;
  const date = document.getElementById('paymentDate').value;
  const status = document.getElementById('paymentStatus').value;

  try {
    await fetch(`${BASE_URL}/payments`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, date, status })
    });
    hidePaymentForm();
    loadPayments();
  } catch (error) {
    console.error('Error adding payment:', error);
  }
}

async function deletePayment(id) {
  const token = localStorage.getItem('token');
  try {
    await fetch(`${BASE_URL}/payments/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    loadPayments();
  } catch (error) {
    console.error('Error deleting payment:', error);
  }
}

// Maintenance Requests
async function loadMaintenanceRequests() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASE_URL}/maintenance`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const requests = await response.json();
    const maintenanceList = document.getElementById('maintenanceList');
    maintenanceList.innerHTML = requests.map(req => `
      <div class="maintenance-card">
        <p>Issue: ${req.issue}</p>
        <p>Status: ${req.status}</p>
        <p>Date: ${new Date(req.date).toLocaleDateString()}</p>
        <button onclick="deleteMaintenance('${req._id}')">Delete</button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading maintenance requests:', error);
  }
}

async function addMaintenance() {
  const token = localStorage.getItem('token');
  const issue = document.getElementById('maintenanceIssue').value;
  const status = document.getElementById('maintenanceStatus').value;

  try {
    await fetch(`${BASE_URL}/maintenance`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ issue, status })
    });
    hideMaintenanceForm();
    loadMaintenanceRequests();
  } catch (error) {
    console.error('Error adding maintenance request:', error);
  }
}

async function deleteMaintenance(id) {
  const token = localStorage.getItem('token');
  try {
    await fetch(`${BASE_URL}/maintenance/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    loadMaintenanceRequests();
  } catch (error) {
    console.error('Error deleting maintenance request:', error);
  }
}

// Logout
document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'login.html';
});

// Initial load
if (window.location.pathname.endsWith('dashboard.html')) {
  showSection('properties');
}
