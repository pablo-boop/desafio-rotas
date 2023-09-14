import Link from "next/link";
import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>RocketSeat</h1>
            <Imagem link="https://classic.exame.com/wp-content/uploads/2020/11/shawee-rocketseat-fusao-fundadores-1.jpg?quality=70&strip=info&w=1024"/>
        </div>
        </>
    )
}

export default SobreNos;