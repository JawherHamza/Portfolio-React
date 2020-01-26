import React from "react";
import Toggle from "./Toggle";
import useDarkMode from "use-dark-mode";
import { Button } from "@material-ui/core";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  console.log(darkMode.value);
  return (
    <div className="dark-mode-toggle">
      <Button onClick={darkMode.disable}>☀</Button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <Button onClick={darkMode.enable}>☾</Button>
    </div>
  );
};

export default DarkModeToggle;
