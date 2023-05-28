import styles from './LadoDireito.module.css'
import Penguim from '../Imagens/Penguim.jpg'
import Espantalho from '../Imagens/Espantalho.jpg'
import Perfil from '../Imagens/Eu.jpg'


function LadoDireito() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.card} id={styles.card}>
                    <img src={Perfil} alt="Foto do Pedro" />
                </div>
                <p className={styles.subtxt}>DNBVARZEA</p>
                <h5 className={styles.submudar}>Mudar</h5>
            </div>

            <div>
                <h4>Sugestão para você</h4>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={Penguim} alt="Penguim" />
                </div>
                <p>Penguim</p>
                <h5>Seguir</h5>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={Espantalho} alt="Espantalho" />
                </div>
                <p>Espantalho</p>
                <h5>Seguir</h5>
            </div>
        </div>
    )
}

export default LadoDireito