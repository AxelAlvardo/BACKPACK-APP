import { useRef} from "react";
import { NavLink } from 'react-router-dom';

export const Header = ()=>{

    const navRef = useRef();

    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive-nav')
    }

    return(
        <div className="div-main">
            <nav className="nav">
                <div className="nav__logo">
                    <img src="../../../public/images/logo.png" alt="logo" className="logo" />
                    <p className="logo__title">backpack</p>
                </div>

                    <ul className="nav__list" ref={navRef}> 
                        <li className="nav__items">
                            <a href="#" className="nav__link">Inicio</a>
                        </li>
                        <li className="nav__items">
                            <a href='#' className="nav__link">Servicios</a>
                        </li>
                        <li className="nav__items">
                            <a href="#" className="nav__link">Sobre Nosotros</a>
                        </li>
                        <li className="nav__items">
                            <NavLink to='/login' className="start">Iniciar</NavLink>
                        </li>

                        <button className="btn-close" onClick={showNavBar}>
                            <img src="../../../public/images/menu.png" alt="menu" className="icon-menu"/>
                        </button>
                    </ul>

                    <button className="btn-menu" onClick={(showNavBar)}>
                        <img src="../../../public/images/menu.png" alt="menu" className="icon-menu"/>
                    </button>

                {/* EDITS PAGE */}
                <img src="../../../public/images/rectangle-1-purple.png" className="rec-1" alt="rectagle" />
                <img src="../../../public/images/rectangle-2-purple.png" className="rec-2" alt="rectagle" />
            </nav>

            <section className="hero container">
                <div className="hero__text">
                    <h1 className="text__title">
                        Aprende, Organiza y Comparte.
                    </h1>    

                    <NavLink to="/login" className="hero__cta">Empezar</NavLink>
                </div>     

                {/* FIGURES */}
                <img src="../../../public/images/figure-1.png" alt="figure" className="figure figure-1" />
                <img src="../../../public/images/figure-2.png" alt="figure" className="figure figure-2" />

                {/* CIRCLES */}
                <img src="../../../public/images/bubble-1.png" alt="buble" className="bubble bubble-1" />
                <img src="../../../public/images/bubble-4.png" alt="buble" className="bubble bubble-4" />

                <img src="../../../public/images/bubble-2.png" alt="buble" className="bubble bubble-2" />
                <img src="../../../public/images/bubble-3.png" alt="buble" className="bubble bubble-3" />

                <img src="../../../public/images/bubble-5.png" alt="buble" className="bubble bubble-5" />

                <img src="../../../public/images/bubble-5.png" alt="buble" className="bubble bubble-6" />

            </section>

        </div>
    )
}