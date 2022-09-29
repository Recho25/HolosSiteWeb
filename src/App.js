
import './App.scss';
import Header from "./components/Header/Header";
import Services from "./components/Services";
import Valeurs from "./components/Valeurs";
import Equipe from "./components/Equipe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
          <section id={"accueil"} className={"hero_section filter_black"} style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/img/background_placeholder.jpeg')`
          }}>
            <div className="container">
                <h1>Bienvenue dans le cabinet financier Holos!</h1>
            </div>
          </section>
          <section id={"services"}>
              <div className="container">
                  <h2>Nos services</h2>
                  <div className="services_container">
                    {<Services></Services>}
                  </div>
              </div>
          </section>
          <section id={"valeurs"}>
              <div className="container">
                  <h2>Nos valeurs</h2>
                    <Valeurs></Valeurs>
              </div>
          </section>
          <section id={"mission"}>
              <div className="container">
                  <h2>Notre mission</h2>
                  <p>Grâce à l’expertise de son équipe, Holos conseille et prend en charge les besoins de ses clients en matière de choix de placement et d’assurance. Son approche efficiente et Holistique permet une optimisation de la destination financière des particuliers et des propriétaires d’entreprise.</p>
              </div>
          </section>
          <section id={"equipe"}>
              <div className="container">
                  <h2>Notre Équipe</h2>
                  <Equipe></Equipe>
              </div>
          </section>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
