import foto from "./Img/minhaFoto.png";
import "./SectionHome.css";

function SectionHome() {
    return (
        <section id="home">
            <div className="textHome">
                <p>Olá, eu sou Allan Pinheiro</p>
                <h1>
                    Desenvolvedor
                    <br />
                    Front End
                </h1>
                <a href="{}">
                    <button>Download CV</button>
                </a>
            </div>
            <div className="divImg">
                <img src={foto} alt="pngwing" width="250" />
            </div>
        </section>
    );
}

export default SectionHome;
