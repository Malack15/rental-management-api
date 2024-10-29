document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, role })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        document.getElementById('response').textContent = `User registered successfully: ${data.email}`;
      } else {
        document.getElementById('response').textContent = `Error: ${data.error}`;
      }
    } catch (error) {
      document.getElementById('response').textContent = `Failed to connect to API: ${error.message}`;
    }
  });
  