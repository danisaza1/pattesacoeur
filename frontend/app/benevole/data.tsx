export interface Volunteer {
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  // birthdate: string;
  address: string;
  zipcode: string;
  disponibility: {
    date: string;
    start: string;
    end: string;
  };
}

export async function PostVolunteer(volunteer: Volunteer) {
  console.log(JSON.stringify(volunteer, null, 2));
  try {
    const response = await fetch("http://127.0.0.1:8000/api/volunteers/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(volunteer),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Volunteer successfully created:", data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Une erreur inconnue est survenue:", error);
    }
  }
}
