// pages/about.tsx
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-800">
      {/* Header */}
      <header className="bg-[#004383] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">About Me</h1>
          <nav>
            <Link href="/"  className="text-white hover:text-blue-700">Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Name</h2>
          <p className="text-lg">Alishba Shabbir</p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-lg">FSC in Inter</p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">HTML</li>
            <li className="text-lg">CSS</li>
            <li className="text-lg">TypeScript</li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-lg">
            I am a passionate front-end developer skilled in HTML, CSS, and TypeScript. I am enthusiastic about creating elegant and user-friendly web interfaces. Currently, I am enhancing my expertise and working on exciting projects to build a strong portfolio.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
