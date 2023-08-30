import "./Header.css";

export default function Header() {
  return (
    <body>
      <div className="header">
        <img className="logo" src="/logo.jpg" alt="Logo" />

        <div className="lupa">
          <input type="text" placeholder="Pesquisar" />

          <img className="imagem" src="/lupa.png" alt="Search" />
        </div>
        <ul className="itens">
          <li className="item">
            <a href="#">Início</a>
          </li>
          <li className="item">
            <a href="#">Artistas</a>
          </li>
          <li className="item">
            <a href="#">Obras</a>
          </li>
          <li className="item">
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </body>
  );
}
