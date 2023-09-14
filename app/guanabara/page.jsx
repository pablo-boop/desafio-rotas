import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>Gustavo Guanabara</h1>
            <Imagem link="https://pbs.twimg.com/media/FOEJ6c-WUAIsw9R?format=jpg&name=large"/>
        </div>
        </>
    )
}

export default SobreNos;