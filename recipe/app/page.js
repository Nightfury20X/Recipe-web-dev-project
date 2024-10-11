export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        <span className="text-green-600">Hello! I am</span>{" "}
        <span className="text-indigo-600">Kiran P Abraham</span>
      </h1>

      <section className="mb-8 text-center sm:text-left text-red-600">
        <h2 className="text-2xl font-semibold mb-4">My Interests</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🥁 Drums</li>
          <li>🧩 Cubing</li>
        </ul>
      </section>

      <button
        className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
      >
        Random Button
      </button>
    </div>
  );
}
