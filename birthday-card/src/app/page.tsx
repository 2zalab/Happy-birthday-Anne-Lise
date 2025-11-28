import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-100 p-24">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-center text-pink-500 mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Joyeux Anniversaire, Naogaï Anne Lise!
        </h1>
        <div className="flex justify-center my-8">
          <Image
            src="/naogai.jpg"
            alt="Naogaï Anne Lise"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <p className="text-2xl text-gray-700 text-center">
          Nous te souhaitons une journée aussi belle et rayonnante que toi. Que cette nouvelle année t'apporte bonheur, santé et succès.
        </p>
        <p className="text-2xl text-gray-700 text-center mt-4">
          Avec toute notre affection,
        </p>
        <p className="text-2xl text-right text-pink-500 font-bold mt-4">
          Tes amis
        </p>
      </div>
    </main>
  );
}
