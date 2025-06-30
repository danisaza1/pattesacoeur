import Grid from "./components/Grid";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
<>
    <Header></Header>
    
    <main className="flex flex-col items-center w-full">
  <section className="bg-[url('/images/dog-4765784_1920.jpg')] bg-cover h-[60vh] flex items-center justify-center text-white w-full">
    <div>
          <h2 className="items-center-safe text-3xl md:text-4xl font-bold mb-4">DONNONS-LEUR AUTANT QU'ILS NOUS APPORTENT</h2>
          <p className="text-lg">Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption.</p>
        </div>
      </section>
      
      <div className="-mt-20 z-1 relative max-w-4xl">
    <SearchForm />
</div>

       <h1 className="text-3xl font-bold mt-8">Nos animaux à adopter</h1>

  <div className="w-full py-4 bg-zinc-50 flex flex-col items-center">
    <Grid />
    <button className="...">Voir +</button>
  </div>
</main>
    <Footer></Footer>
    </>
  );
}


