import Link from "next/link";
import { Header } from "../components/header/Header";
import styles from '../page.module.css'
import Imagem from "../components/imagem/Imagem";

const SobreNos = () => {
    return (
        <>
            <Header />
        <div className={styles.bckg}>
            <h1>CS : GO</h1>
        <Imagem link="https://s2-ge.glbimg.com/BsRH4rij3O7pZ-gj3JCCLNFcFw0=/0x0:1100x618/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Y/i/dULbPDQDC1fIKuUQQRug/csgo-image.jpg"/>
        </div>
        </>
    )
}

export default SobreNos;