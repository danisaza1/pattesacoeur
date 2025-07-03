import Link from "next/link";;

export default function ReturnAdopter() {
  return (
    <section className=" p-20 bg-blue-100 flex justify-center">
        <div className=" p-40  bg-blue-200 width: 1rem  flex  flex-col md:flex-column items-center justify-center gap-32 rounded-3xl w-1/2  gap-6 md:gap-8 w-full max-w-4xl mx-auto" >
       <h2 className="text-2xl font-semibold mb-4">Merci pour votre inscription</h2>
        <p className="mb-6 text-gray-600">
          Voici les informations de votre compte:
        </p>
            <Link href= "/app/page.tsx" >
                <button  className=" px-22 py-6 text-lg font-bold text-white bg-[#324960] rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-[#6da2b5] hover:shadow-[0_6px_12px_rgba(6,182,212,0.4)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out whitespace-nowrap">
                bravo</button>
            </Link>
        </div>
    </section>
  );
}