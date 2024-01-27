import iconP from "./Img/iconP.png";
import "./Header.css";

function Header() {
    return (
        <header id="headertop">
            <img src={iconP} alt="iconP" width="48" />
            <nav>
                <ul type="none">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>
            <div className="menuMobile">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;
