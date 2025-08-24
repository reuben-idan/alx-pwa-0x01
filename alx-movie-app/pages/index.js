import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>CineSeek - Movie App</title>
        <meta name="description" content="Discover your next favorite movie" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to CineSeek</h1>
        <p className="text-center text-gray-700 mb-8">
          Your ultimate movie discovery platform. Search, discover, and save your favorite movies.
        </p>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
