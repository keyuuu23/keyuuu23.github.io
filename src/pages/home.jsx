import styles from '../styles/Home.module.css';

function Home() {

    return (
        <main>
            <div className={styles.aboutMe}>
                <h1>Hola! Soy Ben Delgado</h1>
                <h3>y soy un Desarrollador en Multiplataforma Junior.</h3>
                <p>Siempre me ha llamado la atención el diseño y el desarrollo,
                    sobretodo de videojuegos y a nivel de aplicaciones web.
                    Me defino como una persona curiosa y con la mente muy abierta, siempre
                    dispuesto a buscar la mejor solucion posible con ayuda de mi equipo.
                </p>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.whatIDid}>
                        <h2>¿Que he hecho?</h2>
                        <p>En los años que llevo formandome he:
                            <ul>
                                <li><img src="../assets/img/star.gif" alt="star"/> Desarrollado alphas de videojuegos en Unity con C#.</li>
                                <li><img src="../assets/img/star.gif" alt="star"/> Aprendido a crear webs y aplicaciones con JavaScript y React.</li>
                                <li><img src="../assets/img/star.gif" alt="star"/> Desarrollado diferentes programas con Java.</li>
                                <li><img src="../assets/img/star.gif" alt="star"/> Trabajado con bases de datos como MongoDB, Firebase y MySQL.</li>
                                <li><img src="../assets/img/star.gif" alt="star"/> Desarrollado aplicaciones en Android.</li>
                                <li><img src="../assets/img/star.gif" alt="star"/> Aprendido a crear aplicaciónes utiles y amables con la UX.</li>
                            </ul>
                        </p>
                        <p>Todo esto lo he realizado en el CFGS de DAM en la Universidad Alfonso X El Sabio (UAX).</p>
                        <p>Septiembre 2023 - Junio 2025</p>
                        <h4>‎</h4>
                        <p>Tras terminar mi formación he realizado practicas como QA desempeñando las siguientes funciones:</p>
                        <ul>
                            <li><img src="../assets/img/star.gif" alt="star"/> Revisión de código y documentación de proyectos.</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Pruebas de usabilidad y experiencia de usuario.</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Pruebas de rendimiento y seguridad en aplicaciones web.</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Colaboración con el equipo de desarrollo para mejorar la calidad del software.</li>
                        </ul>
                        <p>Estas practicas las he realizado en la Asociación Innicia.</p>
                        <p>Marzo de 2025 - Junio de 2025</p>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.whatIKnow}>
                        <h2>¿Que se?</h2>
                        <p>Mis conocimientos se centran sobretodo en
                            JavaScript, React, MongoDB, Firebase, Java y C#
                        </p>
                        <p>Actualmente estoy profundizando más en el desarrollo web y de videojuegos,
                            poniendo a prueba mis habilidades en proyectos personales y aprendiendo nuevas tecnologías 
                            como Node.js, React Native y puliendo mis conocimientos en Unity.
                        </p>
                    </div>

                    <div className={styles.skillsNdLanguages}>
                        <h2>Habilidades</h2>
                        <ul>
                            <li><img src="../assets/img/star.gif" alt="star"/> Muy Paciente</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Creativo</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Mente Abierta</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Flexibilidad</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Trabajo en equipo</li>
                        </ul>
                                    
                        <h2>Idiomas</h2>
                        <ul>
                            <li><img src="../assets/img/star.gif" alt="star"/> Español (Nativo)</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Inglés (B2)</li>
                            <li><img src="../assets/img/star.gif" alt="star"/> Francés (Aprendiendo)</li>
                        </ul>
                    </div> 
                </div>
            </div>
        </main>
    );
}
export default Home;