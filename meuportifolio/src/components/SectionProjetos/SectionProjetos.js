import coffee from "./Img/CoffeeTime.PNG";
import orkut from "./Img/orkut.PNG";
import relogio from "./Img/relogio.PNG";
import techblu from "./Img/techblu.PNG";
import "./SectionProjetos.css";

function Projetos() {
    return (
        <section id="projetos">
            <h2>Projetos</h2>
            <div className="cards">
                <div className="card">
                    <img src={coffee} alt="semfoto" />
                </div>
                <div className="card">
                    <img src={orkut} alt="semfoto" />
                </div>
                <div className="card">
                    <img src={relogio} alt="semfoto" />
                </div>
                <div className="card">
                    <img src={techblu} alt="semfoto" />
                </div>
            </div>
        </section>
    );
}

export default Projetos;
