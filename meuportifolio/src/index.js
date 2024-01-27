import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/Header/Header";
import SectionHome from "./components/SectionHome/SectionHome";
import SectionSobre from "./components/SectionSobre/SectionSobre";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import SectionProjetos from "./components/SectionProjetos/SectionProjetos";
import SectionContato from "./components/SectionContato/SectionContato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <SectionHome />
        <SectionSobre />
        <SectionSkills />
        <SectionProjetos />
        <SectionContato />
    </React.StrictMode>
);
