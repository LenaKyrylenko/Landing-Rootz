import styles from './Questions.module.scss'
const TextReady = () =>
    <>
      
        <p className={styles.QA__title}>Ready to Get started?</p>
        <p className={styles.QA__text}>
            When pattern is mentioned in interior design,
            it is easy to asso- ciate it with a geometric
            patterned wallpaper or colourful prints on interior
            fabrics.
        </p>
        <button className={`btn ${styles.QA__btn}`}> Contact us </button>
          
    </>

export default TextReady