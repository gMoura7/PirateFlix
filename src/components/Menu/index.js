import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './index.css'
import Button from './Button';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PirateFlix logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Video
            </Button>

        </nav>
    );
}

export default Menu;