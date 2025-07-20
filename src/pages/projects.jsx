import styles from '../styles/Projects.module.css';
import star from '../assets/img/star.gif'
import mb from '../assets/img/portadaMB.png'
import gaa from '../assets/img/portadaGAA.png'

function Projects() {
    return(
        <main>
            <div className={styles.projects}>
                <h1>Proyectos que he hecho</h1>
                <h3>En todo este tiempo</h3>
                <p>Durante mi formación educativa y tambien de forma personal he ido realizando diversos proyectos, 
                    tanto en desarrollo de videojuegos (Unity con C#) como en desarrollo con Java o React, ambos con diferentes
                    servicios de bases de datos.
                </p>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.videogames}>
                    <h2>Videojuegos</h2>
                    <p>En cuanto al desarrollo de videojuegos he usado mayormente Unity y softwares de diseño como Blender, Krita o Aseprite.
                        Los proyectos más destacables son:
                    </p>
                    <div className={styles.gamesGrid}>
                        <div className={styles.card}>
                            <img src={mb} alt="MB" />
                            <div className={styles.cardText}>
                            <h3>Mangata Blades</h3>
                            <p>RPG 2D con estetica fantasiosa en el que tu misión principal es salvar tu reino del dios del Sol con la ayuda de tus dos espadas.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={gaa} alt="GAA" />
                            <div className={styles.cardText}>
                            <h3>Gears and Ashes</h3>
                            <p>Juego de cartas en 2D con estetica Steampunk en el que realizas peleas por rondas con diferentes cartas que vas encontrando.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.react}>
                    <h2>Desarrollo Web</h2>
                    <p>He realizado páginas web en React, tanto para el TFG como para las practicas u otros proyectos a lo largo de mi formación, 
                        aparte de esto obtuve el 2do. puesto en el Hackathon +QueFamilias organizado por la UAX y la Comunidad de Madrid, un resumen de los proyectos que he hecho serian:
                        <ul>
                            <li><img src={star} alt="star"/> Esta página y el juego que puedes jugar si vas al apartado de juego.</li>
                            <li><img src={star} alt="star"/> La aplicación que con uso de MySQL gano el Hackathon.</li>
                            <li><img src={star} alt="star"/> Una página web promocionando la aplicación que se desarrollaba en mis prácticas.</li>
                            <li><img src={star} alt="star"/> EspressoArcade, un proyecto de desarrolladora de videojuegos en conjunto a un compañero, este proyecto cuenta con su propia página web e integración con Firebase, presentada como TFG aparte de sus primeros desarrollos.</li>
                        </ul>
                    </p>
                </div>

                <div className={styles.java}>
                    <h2>Programas con Java</h2>
                    <p>En relación a Java todo se ha centrado en la programación orientada a objetos y la integración de servicios de bases de datos, 
                        como MySQL, MongoDB o Firebase, entre estos proyectos destaco:
                        <ul>
                            <li><img src={star} alt="star"/> Creador de playlists desde Java, CRUD y reorganización de playlists completa.</li>
                            <li><img src={star} alt="star"/> Uso de Ajax para crear un buscador de Pokemon por nombre, tipo y rangos de nivel.</li>
                            <li><img src={star} alt="star"/> Creación de un servicio de bar, con menu editable, opcion a pedir platos, guardado de tickets y muestra de precios y alergenos con MongoDB.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </main>
    );
}
export default Projects;