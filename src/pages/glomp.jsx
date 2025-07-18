import {useEffect, useRef, useState} from 'react';
import styles from '../styles/Glomp.module.css'

function Glomp() {

    //Kills var
    const [killCount, setKillCount] = useState(0);
    const [hasWon, setHasWon] = useState(false);

    //GameConditions
    const [hasLost, setHasLost] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const hasWonRef = useRef(false)
    const hasLostRef = useRef(false);
    const showGameRef = useRef(false);

    useEffect(() => {
        hasWonRef.current = hasWon;
    }, [hasWon]);

    useEffect(() => {
        hasLostRef.current = hasLost;
    }, [hasLost]);

    useEffect(() => {
        showGameRef.current = showGame;
    }, [showGame]);

    //Slime var
    const slimesRef = useRef([]);
    const [slimes, setSlimes] = useState([]);
    const slimeSpeed = 0.2;

    //Bullets var
    const [bullets, setBullets] = useState([]);
    const bulletRef = useRef([]);
    bulletRef.current = bullets;
    const bulletSpeed = 2.6;

    //Game and Glomp var
    const [showControls, setShowControls] = useState(false);
    const playerRef = useRef(null);
    const [position, setPosition] = useState({ x: 380, y: 280});
    const playerPosition = useRef({ x: 380, y: 280 });
    const keysPressed = useRef({});
    const speed = 1.2;

    const lastDirection = useRef({ x: 0, y: 0 }); //Player last direction

    useEffect(() => {
        slimesRef.current = slimes;
    }, [slimes]);

    useEffect(() => {
        if (!showGame) return;
        //Slime logic
        const spawnSlime = setInterval(() => {
            const spawnPoints = [
                { x: 340, y: 0 },   // Arriba
                { x: 340, y: 460 }, // Abajo
                { x: 0, y: 240 },   // Izquierda
                { x: 660, y: 240 }, // Derecha
            ];
            const spawn = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
            setSlimes((prev) => [...prev, spawn]);
        }, 1000);

        return () => clearInterval(spawnSlime);
    }, [showGame]);

    useEffect(() => {
        const slimeMovement = () => {
            setSlimes((prevSlimes) => {
                const updated = prevSlimes.map(({x, y}) => {
                    const dx = playerPosition.current.x - x;
                    const dy = playerPosition.current.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy) || 1;

                    const moveX = (dx / distance) * slimeSpeed;
                    const moveY = (dy / distance) * slimeSpeed;

                    return {
                        x: x + moveX,
                        y: y + moveY
                    };
                });

                slimesRef.current = updated;
                return updated;
            });
            checkCollision();
            requestAnimationFrame(slimeMovement);
        };

        const checkCollision = () => {
            if (hasWonRef.current || hasLostRef.current || !showGameRef.current) return;

            const player = playerPosition.current;

            for (let slime of slimesRef.current) {
                const dx = slime.x - player.x;
                const dy = slime.y - player.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 20) { // Assuming player and slime have a radius of 15
                    setHasLost(true);
                    setShowGame(false);
                    break;
                }
            }
        };

        //Game and Glomp logic

        const handleKeyDown = (event) =>{
            const key = event.key.toLowerCase();
            keysPressed.current[key] = true;

            if (key === 'l'){
                const dirX = lastDirection.current.x || 1;
                const dirY = lastDirection.current.y || 0;

                const newBullet = {
                    x: playerPosition.current.x,
                    y: playerPosition.current.y,
                    dx: dirX,
                    dy: dirY
                };
                setBullets((prev) => [...prev, newBullet]);
            }
        };

        const handleKeyUp = (event) => {
            keysPressed.current[event.key.toLowerCase()] = false;
        };

        let animationFrameId;

        const movement = () => {
            setPosition((previousPosition) => {
                let {x, y} = previousPosition;
                let moved = false;
                let dirX = 0;
                let dirY = 0;

                if (keysPressed.current['w']){
                    y -= speed;
                    dirY = -1;
                    moved = true;
                }
                if (keysPressed.current['s']){
                    y += speed;
                    dirY = 1;
                    moved = true;
                }
                if (keysPressed.current['a']){
                    x -= speed;
                    dirX = -1;
                    moved = true;
                }
                if (keysPressed.current['d']){
                    x += speed;
                    dirX = 1;
                    moved = true;
                }

                if (dirX !== 0 || dirY !== 0) {
                    const length = Math.sqrt(dirX * dirX + dirY * dirY);
                    dirX /= length;
                    dirY /= length;
                }

                if (moved) {
                    lastDirection.current = { x: dirX, y: dirY };
                }

                x = Math.max(0, Math.min(x, 660));
                y = Math.max(0, Math.min(y, 460));

                const newPosition = { x, y };
                playerPosition.current = newPosition;

                return newPosition;
            });

            setBullets((prevBullets) => {
                const updatedBullets = prevBullets.map(bullet => ({
                    x: bullet.x + bullet.dx * bulletSpeed,
                    y: bullet.y + bullet.dy * bulletSpeed,
                    dx: bullet.dx,
                    dy: bullet.dy,
                })).filter(bullet => {
                    return bullet.x >= 0 && bullet.x <= 660 && bullet.y >= 0 && bullet.y <= 460;
                });
                bulletRef.current = updatedBullets;
                return updatedBullets;
            });

            let newSlimes = [...slimesRef.current];
            let newBullets = [...bulletRef.current];
            let slimesChanged = false;
            let bulletsChanged = false;
            let kills = killCount;

            const bulletsToRemove = new Set();
            const slimesToRemove = new Set();

            newBullets.forEach((bullet, bulletIndex) => {
                newSlimes.forEach((slime, slimeIndex) => {
                    const dx = slime.x - bullet.x;
                    const dy = slime.y - bullet.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 20) {
                        bulletsToRemove.add(bulletIndex);
                        slimesToRemove.add(slimeIndex);
                    }
                });
            });

            if (bulletsToRemove.size > 0 || slimesToRemove.size > 0) {
                const filteredBullets = newBullets.filter((_, idx) => !bulletsToRemove.has(idx));
                const filteredSlimes = newSlimes.filter((_, idx) => !slimesToRemove.has(idx));
                setBullets(filteredBullets);
                setSlimes(filteredSlimes);
                setKillCount(prev => {
                    const updatedKills = prev + slimesToRemove.size;
                    if (updatedKills >= 25) {
                        setHasWon(true);
                        setShowGame(false);
                    }
                    return updatedKills;
                });
            }

            if (slimesChanged) setSlimes(newSlimes);
            if (bulletsChanged) setBullets(newBullets);
            if (kills !== killCount){
                setKillCount(kills);
                if(kills >= 15){
                    setHasWon(true);
                    setShowGame(false);
                }
            }
            
            animationFrameId = requestAnimationFrame(movement);
        };

        requestAnimationFrame(slimeMovement);
        animationFrameId = requestAnimationFrame(movement);

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);    
        };
    }, []);

    return (
        <main className={styles.mainContainer}>
            <div className={styles.glompTitle}>
                <h1>Glomp's Plague</h1>
                <p>¡Ayuda a Glomp a evitar la plaga de slimes que quiere invadir su jardín!</p>
                <p>Con la ayuda de su pistola de plasma, dispara a los slimes y evita que te ataquen o perderás la partida.</p>
            </div>

            {!showGame && (
                <div className={styles.menuButtons}>
                    <button onClick={() => {if (hasLostRef.current || hasWonRef.current) return; setShowGame(true);}} style = {{backgroundImage: "url(../assets/img/empezarBoton.gif)"}}>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎</button>
                    <button onClick={() => setShowControls(true)} style={{ backgroundImage: "url(../assets/img/controlesBoton.gif)" }}>
                    ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎</button>
                </div>
            )}

            {showGame && (
                <div className={styles.gameContainer}>
                    <img src="../assets/img/escenario.gif" alt="Fondo animado" className={styles.background} />
                    <div className={styles.killCounter}>
                        Slimes Eliminados: {killCount}/25
                    </div>

                    <div
                        ref={playerRef}
                        className={styles.player}
                        style={{ left: position.x, top: position.y }}
                    ></div>
                    {slimes.map((slime, index) => (
                        <div
                            key={index}
                            className={styles.slime}
                            style={{
                                left: slime.x,
                                top: slime.y
                            }}
                        ></div>
                    ))}

                    {bullets.map((bullet, index) => (
                        <div
                            key={index}
                            className={styles.bullet}
                            style={{
                                left: bullet.x,
                                top: bullet.y
                            }}
                        ></div>
                    ))}
                </div>
            )}
            {showControls && (
                <div className={styles.controlsOverlay}>
                    <div className={styles.controlsPanel}>
                        <button className={styles.closeButton} onClick={() => setShowControls(false)}>X</button>
                        <img src="../assets/img/menuControles.gif" alt="Controles" className={styles.controlsImage} />
                    </div>
                </div>
            )}

            {hasLost && (
                <div className = {styles.lost}>
                    <button onClick={() => {
                        setHasLost(false);
                        hasLostRef.current = false;
                        setSlimes([]);
                        setPosition({ x: 380, y: 280 });
                        setShowGame(false);
                        showGameRef.current = false;
                    }}></button>
                </div>
            )}

            {hasWon && (
                <div className={styles.won}>
                    <button onClick={() => {
                        setHasWon(false);
                        hasWonRef.current = false;
                        setSlimes([]);
                        setKillCount(0);
                        setPosition({ x: 380, y: 280 });
                        setShowGame(false);
                        showGameRef.current = false;
                    }}></button>
                </div>
            )}
        </main>
    );
}

export default Glomp;