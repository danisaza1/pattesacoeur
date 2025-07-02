
interface Volunteer {
  first_name: string;
  last_name: string;
  email: string;
  birthdate: string;
  address: string;
  zipcode: string;
  disponibility: string;
}

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
  } catch  (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Une erreur inconnue est survenue:', error);
  }
}
}