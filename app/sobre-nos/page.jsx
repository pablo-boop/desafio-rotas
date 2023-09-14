import Link from "next/link";
import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>Sobre nós</h1>
            <Imagem link="https://www.infomoney.com.br/wp-content/uploads/2019/06/mark-zuckerberg-bloomberg-1.jpg?fit=900%2C600&quality=50&strip=all"/>
        </div>
        </>
    )
}

export default SobreNos;