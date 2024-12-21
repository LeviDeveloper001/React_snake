import { getFieldCoords, itemInArray } from '../../utils/functions';
import styles from './Field.module.css';




function Field({curGame, x, y, ...props}) {
  let curItem = curGame.matrix[y][x]
  let curCoords = getFieldCoords(curItem);

  let haveSnake = false

  if (itemInArray(curCoords, curGame.snake.fields)) {
    haveSnake=true
  }
  
  const classList=[styles.field,]
  if (curItem.isWall) classList.push(styles.isWall)
  if (haveSnake) classList.push(styles.haveSnake)
  const className = classList.join(' ')


  return (
    <td className={className}>
      
    </td>
  );
}

export default Field;