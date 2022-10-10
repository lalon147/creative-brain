import React from 'react';
import Myself from './Myself';
import NavBar from './NavBar';


const Header = () => {
    return (
        <div>
          <NavBar/>  
          <Myself/>
        </div>
    );
};

export default Header;