import Image from "next/image";

export default function Header() {
  return (
    <header className="header reveal">
      <div className="container">
        <div className="logo">
          <Image
            src="/logo-header.png"
            alt="Paris"
            width={200}
            height={100}
          />
        </div>

        <nav className="nav">
          <a href="#destinos">Destinos</a>
          <a href="#pacotes">Pacotes</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato" className="btn-primary">Contato</a>
        </nav>
      </div>
    </header>
  );
}
