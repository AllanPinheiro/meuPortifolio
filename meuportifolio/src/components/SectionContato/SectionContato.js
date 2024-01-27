import iconlinkcont from "./Img/linkedin.png";
import icongitcont from "./Img/github.png";
import "./SectionContato.css";

function SectionContato() {
    return (
        <section id="contato">
            <h2>Contato</h2>
            <div className="iconContato">
                <a
                    href="{https://linkedin.com/in/allan-gabriel-pinheiro-a6531b288}"
                    target="_blank"
                >
                    <img src={iconlinkcont} alt="linkedin" title="LINKEDIN" />
                </a>
                <a href="{https://github.com/AllanPinheiro}" target="_blank">
                    <img src={icongitcont} alt="github" title="GITHUB" />
                </a>
            </div>
        </section>
    );
}

export default SectionContato;
