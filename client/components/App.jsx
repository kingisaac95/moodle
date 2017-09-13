import React from "react";
import { NavigationBar } from "./NavigationBar/NavigationBar.jsx";
import { MainComponent } from "../components/Main/MainComponent.jsx";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  const styles = {
    padding: '10px 40px'
  }
    return(
      <div style={styles}>
        <NavigationBar />
        <MainComponent />
        <Footer />
      </div>
    );
};

export default App;
