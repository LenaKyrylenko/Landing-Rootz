import card from '../../assets/Сard.png'
import styles from '../../components/main/Main.module.scss'
const Card = () => {
  return (
    <img style={{ display: 'block' }} className={styles.imageCard} src={card} />
  )
}
export default Card
