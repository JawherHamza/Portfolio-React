import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import messages_fr from "../messages/fr.json";
import messages_en from "../messages/en.json";
import NavBar from "./NavBar";
import DarkModeToggle from "../components/DarkButtonToggle/DarkModeToggle";
import "../styles/style.scss";

function App() {
  const [language, setLanguage] = useState(navigator.language.split(/[-_]/)[0]);

  const messages = {
    en: messages_en,
    fr: messages_fr
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <div className="App">
        <NavBar setLanguage={setLanguage} />
      </div>
    </IntlProvider>
  );
}

export default App;
