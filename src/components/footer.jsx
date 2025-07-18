import {useState, useRef} from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(new Audio());

    const songs = {
        disco1: "../assets/audio/jericho.mp3",
        disco2: "../assets/audio/otherworldlyFoe.mp3",
        disco3: "../assets/audio/somethingAboutUs.mp3"
    };

    const handleSelectSong = (key) => {
        const song = songs[key];
        if (!song) return;

        audioRef.current.pause();
        audioRef.current = new Audio(song);
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentSong(key);
    };

    const togglePlay = () => {
        if (!currentSong) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <footer>
            <div className={styles.footerContent}>
                <p>Made by Ben Delgado</p>

                <button 
                    className={styles.recordPlayer} 
                    onClick={togglePlay} 
                    disabled={!currentSong}
                    title={currentSong ? (isPlaying ? "Pausar" : "Reproducir") : "Selecciona un disco primero"}
                >
                    <img 
                        src={isPlaying ? "../assets/img/tocadiscoson.gif" : "../assets/img/tocadiscosoff.gif"} 
                        alt="TocaDiscos" 
                    />
                </button>

                <div className={styles.discSelector}>
                    <button className={styles.discsButton}>
                        <img src="../assets/img/discos.gif" alt="Discos" />
                        <div className={styles.discOptions}>
                            <button onClick={() => handleSelectSong('disco1')}>
                                <img src="../assets/img/disco1.gif" alt="Disco 1" />
                            </button>
                            <button onClick={() => handleSelectSong('disco2')}>
                                <img src="../assets/img/disco2.gif" alt="Disco 2" />
                            </button>
                            <button onClick={() => handleSelectSong('disco3')}>
                                <img src="../assets/img/disco3.gif" alt="Disco 3" />
                            </button>
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
export default Footer;