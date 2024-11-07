document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });
  
      if (response.ok) {
        alert('Registration successful! Redirecting to login...');
        window.location.href = 'login.html'; // Redirect to login page
      } else {
        const error = await response.json();
        alert(`Error: ${error.msg || 'Registration failed'}`);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error connecting to the server');
    }
  });
  