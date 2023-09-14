import Link from "next/link"
import styles from "./header.modules.css"

export const Header = () => {
    return (
        <div className={styles.header}>
            <div id="rotas">
                <Link href={'/'}>Home</Link>
                <Link href={'/sobre-nos'}>Sobre nós</Link>
                <Link href={'/valorant'}>Valorant</Link>
                <Link href={'/lol'}>League of Legends</Link>
                <Link href={'/csgo'}>CS : Go</Link>
                <Link href={'/guanabara'}>Gustavo Guanabara</Link>
                <Link href={'/dechamps'}>Felipe Dechamps</Link>
                <Link href={'/montano'}>Lucas Montano</Link>
                <Link href={'/rocketSeat'}>rocketSeat</Link>
                <Link href={'/alura'}>Alura</Link>
            </div>
        </div>
    )
} 