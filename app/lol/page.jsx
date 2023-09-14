import Link from "next/link";
import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>League of Legends</h1>
            <Imagem link="https://displays.riotgames.com/static/poster-dragontrainer-tristana-9d23667c8cc0d48758cc308119c43fd0.jpg"/>
        </div>
        </>
    )
}

export default SobreNos;