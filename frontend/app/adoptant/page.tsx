"use client";
import AdoptingForm from "../components/compte/adopting-form";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import VolunteerForm from "../components/VolunteerForm";

export default function BenevolePage() {
  return (
    <>
      <Header />

      <AdoptingForm />
      {/* <VolunteerForm/> */}
      <Footer />
    </>
  );
}
