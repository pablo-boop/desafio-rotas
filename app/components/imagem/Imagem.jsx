import styles from "./imagem.modules.css";

const Imagem = (props) => {
    return (
        <img className={styles.img} src={props.link} alt={props.name} />
    )
}

export default Imagem;