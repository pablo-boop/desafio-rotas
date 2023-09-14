import Link from "next/link";
import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>Lucas Montano</h1>
            <Imagem link="https://miro.medium.com/v2/resize:fit:2400/2*UbTtj9_xxzLJXTIuDh-qww.png"/>
        </div>
        </>
    )
}

export default SobreNos;