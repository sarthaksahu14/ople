import React from "react";
import Pages from "./Pages";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Support from "./Components/Support";
import Eula from "./Components/Eula";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/support" element={<Support />} />
        <Route path="/eula" element={<Eula />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

    </>
  )
}

export default App;
