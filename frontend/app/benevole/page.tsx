
import Header from "../components/Header";
import Footer from "../components/Footer";
import VolunteerForm from "../components/VolunteerForm";
import Testimonials from "../components/Testimonials";
import WhyVolunteer from "../components/whyVolunteer";
import QuestionsSection from "../components/QuestionSection";
import MissionSection from "../components/MissionSection";

export default function BenevolePage() {
  return (
    <>
      <Header />

      <section id="section1" className="relative bg-cover bg-center py-20 h-80">
  {/* Image de fond */}
  <div className="absolute inset-0 bg-[url('/images/volunteer.jpg')] bg-no-repeat bg-cover bg-center " />

  {/* Overlay opaque */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Contenu au-dessus */}
  <div className="relative z-10 text-center text-white px-6">
    <h2 className="text-4xl font-bold">DEVENIR BÉNÉVOLE</h2>
    <p className="mt-4 text-lg max-w-2xl mx-auto">
      Offrez votre temps, changez des vies. Chez Adaopte, chaque bénévole contribue à redonner espoir aux animaux en attente d’un foyer.
    </p>
  </div>
</section>


      <VolunteerForm />
      <WhyVolunteer />
      <Testimonials />
      <QuestionsSection />
      <MissionSection />
      <Footer />
    </>
  );
}
