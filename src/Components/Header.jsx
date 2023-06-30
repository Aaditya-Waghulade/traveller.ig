import React from 'react'
import{HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <nav>
        <h1>Traveller.ig</h1>
        <main>

        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/contact"}>Tickets Booking</HashLink>
           <HashLink to={"/#destinations"}>Desitnations</HashLink>
           <HashLink to={"/#sources"}>Sources</HashLink>
           <HashLink to={"/#services"}>Services</HashLink>
        </main>
        
    </nav>
  );
};

export default Header;