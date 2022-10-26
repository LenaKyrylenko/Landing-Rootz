import { Input } from 'antd'
import styles from './Contact.module.scss'
import vector1 from '../../assets/VectorLogin.svg'
import vector2 from '../../assets/VectorLoginSmall.svg'

const VectorLoginBig = () => (
    <div className={styles.Login__vector1}>
      <img src={vector1} alt="first vector"/>
    </div>
) 
const VectorLoginSmall = () => (
    <div className={styles.Login__vector2}>
      <img src={vector2} alt="second_vector"/>
    </div>

)
const Login = () => (
  <>

    <div className={styles.Login}>
       <VectorLoginBig />
      <VectorLoginSmall/>
      <p> Log in </p>

      <form action="">
        <Input size="large" placeholder="Name" />
        <Input size="large" placeholder="Email" />
        <button className={`btn ${styles.Login__btn}`}> Book a demo</button>
      </form>
    </div>
  </>
)
export default Login
