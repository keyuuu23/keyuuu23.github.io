import { useState } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../styles/Topnav.module.css';
import logoBD from '../assets/img/logonBD.png'
import logoBDkek from '../assets/img/logonBDkek.gif'
import star from '../assets/img/star.gif'
import bContact from '../assets/img/contact.gif'
import bGame from '../assets/img/game.gif'
import bProject from '../assets/img/projects.gif'

function Topnav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

    const isHome = location.pathname === "/";

    return (
        <header>
            <nav>
                <div className={styles.contenedorHeader}>
                    <Link to= "/">
                        <img className={styles.logo} src={isHome ? logoBD : logoBDkek} alt="Logo BD"/>
                    </Link>

                    <div className={styles.buttons}>
                        <button className={styles.insButton} onClick={() => setShowModal(true)}
                            style = {{backgroundImage: isHome ? "none" : `url(${bContact})`,
                            color: isHome ? "#1A1A1A" : "transparent",}}>
                            {isHome ? <p>Contacto</p> : "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎"}
                        </button>

                        <button className={styles.insButton} onClick={() => navigate("/glomp")}
                            style = {{backgroundImage: isHome ? "none" : `url(${bGame})`,
                            color: isHome ? "#1A1A1A" : "transparent",}}>
                            {isHome ? <p>Juego</p> : "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎"}
                        </button>

                        <button className={styles.insButton} onClick={() => navigate("/projects")}
                            style = {{backgroundImage: isHome ? "none" : `url(${bProject})`,
                            color: isHome ? "#1A1A1A" : "transparent",}}>
                            {isHome ? <p>Proyectos</p> : "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎"}
                        </button>
                    </div>
                </div>
            </nav>

            {showModal && (
                <div className={styles.modalStructure}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeModal} onClick={() => setShowModal(false)}><p>X</p></button>
                        <h2>Contacto</h2>
                        <ul>
                            <li><img src={star} alt="star"/>Correo: <a href="mailto:aben.db04@gmail.com">aben.db04@gmail.com</a></li>
                            <li><img src={star} alt="star"/>CV (PDF): <a href="/assets/pdf/benDelgadoCV.pdf" download>Descargar CV</a></li>
                            <li><img src={star} alt="star"/><a href="https://es.linkedin.com/in/alfonso-benjamin-delgado-briceño-b33607209" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>    
            )}

        </header>
    );
}
export default Topnav;

