import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Bruno Augusto" 
            conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione corrupti, quia asperiores fuga incidunt veritatis nobis similique ad quas quaerat nesciunt fugiat aliquid inventore corporis esse dolorum a sapiente!" 
          />
          <Post 
            author="Gabriel Augusto" 
            conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione corrupti, quia asperiores fuga incidunt veritatis nobis similique ad quas quaerat nesciunt fugiat aliquid inventore corporis esse dolorum a sapiente!" 
          />
        </main>
      </div>
      
    </div>
     
  )
}

