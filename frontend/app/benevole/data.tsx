export interface Volunteer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  telephone: string;
  address: string;
  zipcode: string;
  motivation?: string;
}

export interface Availability {
  volunteer: number;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
}

export async function PostVolunteer(volunteer: Volunteer): Promise<Volunteer> {
  try {
    const response = await fetch("http://localhost:8000/api/volunteers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(volunteer),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur ${response.status} : ${errorText}`);
    }

    const data = await response.json();
    console.log("✅ Bénévole créé avec succès :", data);
    return data;
  } catch (error: unknown) {
    console.error("❌ Erreur lors de la création du bénévole.");
    throw error;
  }
}

export async function PostAvailability(availability: Availability): Promise<Availability> {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/availability/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(availability),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur ${response.status} : ${errorText}`);
    }

    const data = await response.json();
    console.log("✅ Disponibilité enregistrée :", data);
    return data;
  } catch (error: unknown) {
    console.error("❌ Erreur lors de l'enregistrement de la disponibilité.");
    throw error;
  }
}