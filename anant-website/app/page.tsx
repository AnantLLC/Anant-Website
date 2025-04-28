import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-6" style={{ backgroundImage: 'url(/your-hero-background.jpg)' }}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Building Wealth<br />Securing Futures<br />Growing Together
        </h1>
        <p className="text-white mt-2">↓ Anant LLC</p>
      </section>

      {/* About Us Section */}
      <section className="about">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-6">
          <Image
            src="/ladder-help.jpg"
            alt="Helping Hand"
            width={500}
            height={500}
            className="about-image"
          />
          <div className="about-text">
            <h2>We're With You — Every Step of the Way</h2>
            <p>
              We are headquartered in Austin, TX, but we serve clients nationwide.
              Whether you're looking for financial consulting, life insurance,
              or career opportunities in the financial services industry,
              we invite you to explore how Anant Financial Consulting can help you secure a brighter future.
            </p>
            <button className="about-button">About Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}
