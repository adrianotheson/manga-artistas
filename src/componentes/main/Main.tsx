import "./Main.css";

export default function Main() {
  return (
    <body>
      <div className="main">
        <h1 className="titulo">Portfólio de Manga do Adriano Filho</h1>
        <div className="artista">
          <img
            className="artista-imagem"
            src="/adriano.png"
            alt="Adriano Filho"
          />

          <p>
            A Jornada de Adriano Filho" narra a vida fictícia de um jovem
            apaixonado por mangás desde a infância. Ele decide seguir seu sonho
            de se tornar um mangaká, ingressando em uma escola de artes para
            aprimorar suas habilidades. Após anos de dedicação, ele conquista
            sua primeira publicação e enfrenta desafios como prazos, bloqueio
            criativo e críticas. Com o tempo, suas histórias originais ganham
            destaque na indústria, inspirando uma nova geração de artistas. Sua
            jornada não apenas o leva ao sucesso profissional, mas também o
            ajuda a crescer como indivíduo, deixando um legado duradouro de
            criatividade e perseverança.
          </p>
        </div>
        <h2 className="titulo">Projetos Recentes</h2>
        <div className="titulo-manga">
          <h3>Título: Berserk</h3>

          <img
            className="artista-imagem"
            src="berserk.jpg"
            alt="berserk"
          />

          <p>
            Breve descrição: Berserk (ベルセルク Beruseruku) é uma série de
            mangá escrita e ilustrada por Adriano Filho. Situado em um mundo de
            fantasia sombria inspirado na Europa medieval, a história gira em
            torno de Guts, um solitário mercenário, e Griffith, o líder de um
            bando de mercenários chamado de "Bando do Falcão".
          </p>
        </div>
        <div className="titulo-manga">
          <h3>Título: Ken e no Michi</h3>

          <img
            className="artista-imagem"
            src="ken e np michi.jpg"
            alt="ken e np michi"
          />

          <p>
            Breve descrição: Com muito orgulho a Graphite editora está lançando
            Ken no Michi - O caminho da espada, um compilado com histórias de
            samurais selecionadas pelo Mestre Julio Shimamoto, nossa edição será
            Oversize (24x34cm) onde contará com as histórias de: Musashi, O
            espadachim do diabo, Possessão demoníaca, Zatoichi, A morte do
            Samurai, O órfão, O dever do Samurai, Shi e A vingança ou Harakiri
            além de matreiras e uma entrevista inédita com autor.
          </p>
        </div>
        <div className="galeria">
          <h2 className="titulo">Galeria</h2>

          <img
            className="artista-imagem"
            src="Noa.jpg"
            alt="Noa"
          />

          <h1>Noa</h1>
          <div className="galeria-descricao">
            <p>
              Legenda: Um dos primeiros trabalhos do famoso mangaka Filho
              Adriano. Segue o nosso herói solitário Noah (Noé), em um deserto
              pós-apocalíptico.
            </p>
          </div>

          <img
            className="artista-imagem"
            src="projeto berserk.jpg"
            alt="projeto berserk"
          />
          <h1>projeto berserk</h1>
          <div className="galeria-descricao">
            <p>
              Legenda: É uma demonstração, mas ele cita o passado dele, as
              motivações, elementos como o stigma marcado em sua pele aparecem,
              já existe o conceito de ser "apenas um humano" e não conseguir
              lidar com a grandiosidade do horror cósmico, algo bastante
              lovecraftiano.
            </p>
          </div>

          <img
            className="artista-imagem"
            src="Ourou.jpg"
            alt="Ourou"
          />
          <h1>Ourou</h1>
          <div className="galeria-descricao">
            <p>
              Legenda: Iba, um vigoroso e jovem historiador, desaparece durante
              uma expedição solitária para estudar a Rota da Seda...
            </p>
          </div>
        </div>
        <h2 className="des-fi">
          Inspirações para criar o maior manga da minha vida e o mais conhecido
          pelo público
        </h2>
        <p className="des-fi">
          As principais influências de Adriano Filho na criação de "Berserk"
          foram três mangás clássicos...
        </p>
      </div>
    </body>
  );
}
