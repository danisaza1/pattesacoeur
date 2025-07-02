'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function VolunteerForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedDate || !startTime || !endTime) {
      alert("Veuillez sélectionner une date, une heure de début et une heure de fin pour vos disponibilités.");
      return;
    }
    if (startTime.getTime() >= endTime.getTime()) {
      alert("L'heure de début doit être antérieure à l'heure de fin.");
      return;
    }

    const finalStartTime = new Date(selectedDate);
    finalStartTime.setHours(startTime.getHours(), startTime.getMinutes(), 0, 0);

    const finalEndTime = new Date(selectedDate);
    finalEndTime.setHours(endTime.getHours(), endTime.getMinutes(), 0, 0);

    console.log("Date sélectionnée:", selectedDate.toLocaleDateString('fr-FR'));
    console.log("Disponibilité de:", finalStartTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    console.log("À:", finalEndTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("availabilityDate", selectedDate.toISOString().split('T')[0]);
    formData.append("availabilityStartTime", finalStartTime.toISOString());
    formData.append("availabilityEndTime", finalEndTime.toISOString());

    formData.delete("availability");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Formspree response:', data);
        alert('Candidature envoyée avec succès!');
        setSelectedDate(null);
        setStartTime(null);
        setEndTime(null);
        form.reset();
      } else {
        console.error('Erreur Formspree:', data);
        alert('Erreur lors de l\'envoi de la candidature.');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      alert('Erreur lors de l\'envoi de la candidature.');
    }
  };

  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-4xl shadow flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold mb-6">FORMULAIRE D'INSCRIPTION</h2>
        <p className="mb-8 text-lg text-gray-600 max-w-xl text-center">
          Remplissez ce formulaire pour joindre notre réseau de bénévoles.
        </p>
        <form
          action="https://formspree.io/f/mjkgrkqk"
          method="POST"
          className="space-y-6 flex flex-col justify-between w-full max-w-3xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <input
              required
              name="firstname"
              placeholder="Prénom *"
              className="input w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              required
              name="lastname"
              placeholder="Nom *"
              className="input w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <input
            required
            name="email"
            placeholder="Adresse email *"
            type="email"
            className="input w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <input
              required
              name="city"
              placeholder="Ville *"
              className="input w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              required
              name="zipcode"
              placeholder="Code postal *"
              className="input w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Sélecteur de Date (Calendrier) - MODIFIED */}
          <div className="w-full">
            <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-700 mb-1">Date de disponibilité *</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Sélectionnez une date *"
              className="input w-full border border-gray-300 rounded-md px-4 py-2" // This applies to the outer container
              // IMPORTANT: Use wrapperClassName for the React-Datepicker container,
              // and the input's classes should go into className directly on the component.
              // If className is not enough, you might need to target the inner input specifically with CSS,
              // or use the inputProps prop if the library supports it explicitly for the input.
              wrapperClassName="w-full" // Added this to make the wrapper full width
              id="selectedDate"
              required
            />
          </div>

          {/* Sélecteurs d'heure de début et de fin */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="w-full">
              <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">Heure de début *</label>
              <DatePicker
                selected={startTime}
                onChange={(date: Date | null) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Heure"
                dateFormat="HH:mm"
                placeholderText="HH:MM"
                className="input w-full border border-gray-300 rounded-md px-4 py-2"
                wrapperClassName="w-full" // Added this
                id="startTime"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">Heure de fin *</label>
              <DatePicker
                selected={endTime}
                onChange={(date: Date | null) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Heure"
                dateFormat="HH:mm"
                placeholderText="HH:MM"
                className="input w-full border border-gray-300 rounded-md px-4 py-2"
                wrapperClassName="w-full" // Added this
                id="endTime"
                required
              />
            </div>
          </div>

          <textarea
            required
            name="motivation"
            placeholder="Votre motivation *"
            className="input h-40 w-full border border-gray-300 rounded-md px-4 py-2 resize-none"
          />
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#6da2b5] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out mt-4"
          >
            Envoyer ma candidature
          </button>
        </form>
      </div>
    </section>
  );
}