import { Header } from './components/header/Header'
import Imagem from './components/imagem/Imagem'
import styles from './page.module.css'

export default function Home() {
  return (
    <div id="global">
      <Header />
      <div className={styles.bckg}>
        <h1>Página Inicial</h1>
        <>
          <h3>Olá eu sou Pablo</h3>
          <Imagem link="https://pbs.twimg.com/media/EY55AYwX0AA4HKT.png" name="Adilson"/>
        </>
      </div>
    </div>
  )
}
