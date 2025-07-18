import React, { useState } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../styles/Topnav.module.css';

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
                        <img className={styles.logo} src={isHome ? "../assets/img/logonBD.png" : "../assets/img/logonBDkek.gif"} alt="Logo BD"/>
                    </Link>

                    <div className={styles.buttons}>
                        <button className={styles.insButton} onClick={() => setShowModal(true)}
                            style = {{backgroundImage: isHome ? "none" : "url(../assets/img/contact.gif)",
                            color: isHome ? "#1A1A1A" : "transparent",}}>
                            {isHome ? <p>Contacto</p> : "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎"}
                        </button>

                        <button className={styles.insButton} onClick={() => navigate("/glomp")}
                            style = {{backgroundImage: isHome ? "none" : "url(../assets/img/game.gif)",
                            color: isHome ? "#1A1A1A" : "transparent",}}>
                            {isHome ? <p>Juego</p> : "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎"}
                        </button>

                        <button className={styles.insButton} onClick={() => navigate("/projects")}
                            style = {{backgroundImage: isHome ? "none" : "url(../assets/img/projects.gif)",
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
                            <li><img src="../assets/img/star.gif" alt="star"/>Correo: <a href="mailto:aben.db04@gmail.com">aben.db04@gmail.com</a></li>
                            <li><img src="../assets/img/star.gif" alt="star"/>CV (PDF): <a href="../assets/pdf/cvABenDelgadoBriceño.pdf" download>Descargar CV</a></li>
                            <li><img src="../assets/img/star.gif" alt="star"/><a href="https://es.linkedin.com/in/alfonso-benjamin-delgado-briceño-b33607209" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>    
            )}

        </header>
    );
}
export default Topnav;

