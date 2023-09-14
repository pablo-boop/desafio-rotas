import Link from "next/link";
import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>Felipe Dechamps</h1>
            <Imagem link="https://media.licdn.com/dms/image/C5603AQGmr1EOhC1Gyw/profile-displayphoto-shrink_800_800/0/1613487379448?e=2147483647&v=beta&t=cTalHzNwRyxMnFSrcVZmBCe3Af3c6rnEyNsZTxIQhOc"/>
        </div>
        </>
    )
}

export default SobreNos;