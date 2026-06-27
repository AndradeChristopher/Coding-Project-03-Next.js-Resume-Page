export default function Home() {
  return (
    // Mobile-style site
    <main className="max-w-2xl mx-auto p-10 bg-gray-600 min-h-screen">
      <header className="bg-blue-700 text-white-500 rounded-lg p-8 shadow-md">
        <h1 className="text-4xl font-bold">Christopher Andrade</h1>

        <p className="mt-2">
          christopher.andrade@usf.edu | (813) 974-2331 | Tampa, FL
        </p>

        <p className="mt-2.5">
          Data Analyst
        </p>
      </header>

      <section className="mt-5 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>

        <p className="font-medium">Business Analytics and Information Systems</p>
        <p className="text-green-100">University of South Florida</p>
        <p>Expected Graduation: 2027</p>
      </section>

      <section className="mt-5 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3">Work Experience</h2>

        <h3 className="font-bold">Associate</h3>
        <p className="text-orange-100">Associate of Associates</p>

        <ul className="list-disc ml-6 mt-2">
          <li>Accomplished an 80% improvement in the confidential sharing of associate information among associates.</li>
          <li>Successfully achieved 100% of promised results while collaborating with both internal and external associates.</li>
          <li>Led the quarterly Associate of Associates Association Accolades Achievement (AAAAA) community event through careful preparation and thoughtful consideration in each presentation.</li>
        </ul>
      </section>

      <section className="mt-5 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>

        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded">
            HTML
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded">
            CSS
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded">
            JavaScript
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded">
            React
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded">
            Next.js
          </span>
        </div>
      </section>
        <p className="mt-5 border-t pt-6"></p>
      <footer className="text-center mt-10 text-gray-500">
        © 2026 Christopher Andrade
      </footer>
    </main>
  );
}