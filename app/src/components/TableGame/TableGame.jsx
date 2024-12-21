import styles from './TableGame.module.css';

import Field from '../Field/Field';


function TableRow ({curGame, y, ...props}) {
  let field, fields
  fields=[]
  for (let x = 0; x<curGame.sizeY; x++) {
    field=<Field curGame={curGame} y={y} x={x} key={`${y}-${x}`}/>
    fields.push(field)
  }
  return <tr>
    {fields}
  </tr>
}

function TableGame({curGame, ...props}) {
  let row, rows
  rows = []
  for (let y = 0; y<curGame.sizeY; y++) {
    row=<TableRow curGame={curGame} y={y} key={y}/>
    rows.push(row)
  }
  return (
    <table className={styles.tableGame}>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default TableGame;