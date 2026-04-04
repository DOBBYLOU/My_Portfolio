import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Servers/Services";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
