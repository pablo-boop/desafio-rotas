import Link from "next/link";
import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>Valorant</h1>
            <Imagem link="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/2/akoqciwp4hrh5fhrbuba/games-valorant-capa"/>
        </div>
        </>
    )
}

export default SobreNos;