import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content fade-up">
          <h1>Explore o mundo com a gente</h1>
          <p>
            Viagens inesquecíveis, experiências únicas e destinos incríveis.
          </p>
          <button>Ver pacotes</button>
        </div>
      </section>

      {/* DESTINOS */}
      <section className="section destinos fade-up">
        <h2>Destinos Populares</h2>

        <div className="cards">
          <div className="card">
            <Image
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
              alt="Paris"
              width={300}
              height={200}
            />
            <h3>Paris</h3>
            <p>A cidade do amor te espera.</p>
          </div>

          <div className="card">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
              alt="Maldivas"
              width={300}
              height={200}
            />
            <h3>Maldivas</h3>
            <p>Paraíso tropical exclusivo.</p>
          </div>

          <div className="card">
            <Image
  src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80"
  alt="Roma"
  width={300}
  height={200}
/>

            <h3>Roma</h3>
            <p>História, cultura e gastronomia.</p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section light slide-left">
        <div className="about">
          <div className="about-text">
            <h2>Quem Somos</h2>
            <p>
              Somos uma agência especializada em criar experiências de viagem
              personalizadas, com segurança, conforto e preços acessíveis.
            </p>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="Equipe viajando"
            width={450}
            height={300}
            className="about-img"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="cta zoom-in">
        <h2>Pronto para sua próxima aventura?</h2>
        <button>Fale com um consultor</button>
      </section>

    </>
  );
}
