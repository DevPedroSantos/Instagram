import styles from './Stories.module.css'
import Batman from '../Imagens/Batman.jpg'
import Coringa from '../Imagens/Coringa.jpg'
import Bane from '../Imagens/Bane.jpg'
import Mulher_Gato from '../Imagens/Mulher_Gato.jpg'

function Stories() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={Batman} alt="Batman" />
                <p className={styles.name}>Batman</p>
            </div>
            <div className={styles.card}>
                <img src={Coringa} alt="Coringa" />
                <p className={styles.name}>Coringa</p>
            </div>
            <div className={styles.card}>
                <img src={Bane} alt="Bane" />
                <p className={styles.name}>Bane</p>
            </div>
            <div className={styles.card}>
                <img src={Mulher_Gato} alt="Mulher_Gato" />
                <p className={styles.name}>Mulher_Gato</p>
            </div>
        </div>
    )
}

export default Stories