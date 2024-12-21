import styles from './Main.module.css';

import TableGame from '../TableGame/TableGame';

function Main({curGame, ...props}) {
  return (
    <main className={styles.main}>
      <div className={styles.gameDataWrapper}>
        <h1 className={styles.gameName}>Snake</h1>
        <TableGame curGame={curGame}/>
      </div>
    </main>
  );
}

export default Main;