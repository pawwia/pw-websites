import React, {useState} from 'react';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [openMenu, setOpenMenu]=useState(false);
    const [changeMenuPos, setChangeMenuPos]=useState(false);

    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }
    const changeMenu=()=>
    {
        if(window.scrollY>100)
        {
setChangeMenuPos(true)
        }
        else setChangeMenuPos(false)
    }

    window.addEventListener('scroll',changeMenu)
    return ( <>
    <header id='header'>
<div className="headerLeft">
  <img src={logo} alt="logo"/>
</div>
<div onClick={()=>setOpenMenu(0)}className={openMenu? "headerRight openPhoneMenu" :"headerRight"} >
  <a href="#start" className="headerRightElement">Start</a>
  <a href="#omnie" className="headerRightElement">O mnie</a>
  <a href="#strony" className="headerRightElement">Strony internetowe</a>
  <a href="#portfolio" className="headerRightElement">Portfolio</a>
  <a href="#kontakt" className="headerRightElement">Kontakt</a>

</div>
<div className={changeMenuPos?openMenu?' openMenu changeMenuPos':' openMenu changeMenuPos':openMenu?' openMenu changeMenuPos':' openMenu '} onClick={toggleMenu}>{openMenu?<FontAwesomeIcon icon={faX} size="2x"/>:<FontAwesomeIcon icon={faBars} size="2x"/>}</div>
</header>
<div className="headerBorder" ></div>
    
    </> );
}
 
export default Header;