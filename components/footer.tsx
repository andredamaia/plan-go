import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#">
          <Image
            src="/logo-header.png"
            alt="Paris"
            width={200}
            height={100}
          />
        </a>
        <p>Sua próxima viagem começa aqui.</p>

        <nav>
          <a href="#">Destinos</a>
          <a href="#">Pacotes</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>

        <span>© {new Date().getFullYear()} TravelNow. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
