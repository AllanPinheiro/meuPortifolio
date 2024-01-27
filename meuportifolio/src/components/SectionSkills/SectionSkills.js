import html from "../SectionSkills/Img/html5-original.svg";
import css from "../SectionSkills/Img/css3-original.svg";
import js from "../SectionSkills/Img/javascript-original.svg";
import github from "../SectionSkills/Img/github-original.svg";
import "./SectionSkills.css";

function SectionSkills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="iconSkills">
                <div className="iconTech">
                    <img
                        src={html}
                        alt="html5-original"
                        width="64"
                        title="HTML"
                    />
                    <p>HTML</p>
                </div>
                <div className="iconTech">
                    <img src={css} alt="css3-original" width="64" title="CSS" />
                    <p>CSS</p>
                </div>
                <div className="iconTech">
                    <img
                        src={js}
                        alt="javascript-original"
                        width="64"
                        title="JAVASCRIPT"
                    />
                    <p>JAVASCRIPT</p>
                </div>
                <div className="iconTech">
                    <img
                        src={github}
                        alt="github-original"
                        width="64"
                        title="GITHUB"
                    />
                    <p>GITHUB</p>
                </div>
            </div>
        </section>
    );
}

export default SectionSkills;
