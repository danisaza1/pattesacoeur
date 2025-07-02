
const newVolunteer = {
  first_name: "",
  last_name: "",
  email: "",
  birthdate: "",
  address: "",
  zipcode: "",
  disponibility: ""
};

async function PostVolunteer() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/volunteers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVolunteer)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Volunteer successfully created:', data);
  } catch (error) {
    console.error('Error:', e.message)
  }
}
