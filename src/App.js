import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import services from "./Components/services";
import Contact from "./Components/Contact"

import "./style/app.scss";
import "./style/color.scss";
import "./style/Header.scss";
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/Contact.scss"
import "./style/services.scss"
import "./style/media.scss"



function App() {
  return (
    <Router>
      <Header />
      <script src="https://kit.fontawesome.com/5075e28448.js" crossorigin="anonymous"></script>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<services/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
