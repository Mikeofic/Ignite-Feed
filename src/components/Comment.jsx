import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Comment ({content, onDeleteComment}) {
  const [likeCount, setLikeCount] =useState(0)

  function handleLikeComment() {
    setLikeCount(likeCount +1)
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

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

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  )
}