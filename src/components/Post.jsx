import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src="https://github.com/claro-bruno.png" />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Augusto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="25 de Novembro as 10:00h" dateTime='2022-11-24 10:00:00'>
                    Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm} >
                <strong>Deixa seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <div>
                    <button type='submit'>Comentar</button>
                </div>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}