import React from 'react';
import ViewButton from './ViewButton';
import ProjectsItems from '../assets/ProjectsItems';
import  my_logo from '../assets/my_logo_.png';

function Header(){
    return (
        <header className="header__content">
            <div className="header__container">
                    <div className="header__items">
                        <h1 ><a href="" className="header__items-link"><img src={my_logo} alt="" /></a></h1>
                        <h3>Front End Web Developer</h3>
                        {/* <ViewButton/> */}
                    </div>
            </div>
        </header>
    )
}

export default Header;