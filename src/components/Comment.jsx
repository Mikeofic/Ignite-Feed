import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'


export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Michel Santos</strong>
              <time title="11 de maio as 09:01h" dateTime='2022-07-07 09:01:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}