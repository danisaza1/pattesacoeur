import Header from "../components/Header";
import Footer from "../components/Footer";
import VolunteerForm from "../components/VolunteerForm";
import Testimonials from "../components/Testimonials";
import WhyVolunteer from "../components/whyVolunteer";
import QuestionsSection from "../components/QuestionSection";

export default function BenevolePage() {
  return (
    <>
      <Header />

      <section className="relative h-auto min-h-[450px] ">
        {/* Image de fond */}
        <div className="absolute inset-0 bg-[url('/images/volunteer.jpg')] bg-no-repeat bg-cover bg-center" />
        {/* Overlay opaque */}
        <div className="absolute inset-0 bg-black/48" />
        {/* Contenu centré verticalement et horizontalement */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 min-h-[300px]">
          <h2 className="text-5xl font-bold">DEVENIR BÉNÉVOLE</h2>
          <p className="mt-4 text-xl max-w-2xl text-justify">
            Offrez votre temps, changez des vies. Chez Adaopte, chaque bénévole
            contribue à redonner espoir aux animaux en attente d’un foyer.
          </p>
        </div>
      </section>

      {/* Ajusta este valor de -mt- para controlar cuánto se superpone el formulario. */}
      {/* Prueba con valores como -mt-24, -mt-32, -mt-40, o incluso más grandes si quieres más superposición. */}
      {/* El z-index asegura que el formulario se muestre por encima de la imagen. */}
      <div className="-mt-35 relative z-20"> {/* Puedes ajustar este valor */}
        <VolunteerForm />
      </div>

      <WhyVolunteer />
      <Testimonials />
      <QuestionsSection />
      <Footer />
    </>
  );
}