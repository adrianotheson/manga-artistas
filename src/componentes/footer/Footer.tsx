import "./Footer.css";

export default function Footer() {
  return (
    <body>
      <div className="footer">
        <div className="contato">
          <p>Contato</p>
          <div className="reso">
            <p>
              Email:{" "}
              <a className="link" href="mailto:Kentaro.Miuraemail@example.com">
                Kentaro.Miuraemail@example.com
              </a>
            </p>
          </div>
          <div className="reso">
            <p>
              Instagram:{" "}
              <a
                className="link"
                href="https://www.instagram.com/Kentaro.Miura_perfil"
                target="_blank"
              >
                @Kentaro.Miura_perfil
              </a>
            </p>
          </div>
          <div className="reso">
            <p>
              Website:{" "}
              <a
                className="link"
                href="http://www.KentaroMangasite.com"
                target="_blank"
              >
                www.KentaroMangasite.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
