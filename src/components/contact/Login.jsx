import { Input } from 'antd'
import styles from './Contact.module.scss'

const VectorLogin = () => (
  <>
    <div className={styles.Login__vector1}>
      <svg
        width="61"
        height="56"
        viewBox="0 0 61 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.7082 1.07425C60.7082 1.07425 60.8177 28.2044 44.2413 43.2088C27.6649 58.2133 0.679715 55.4102
 0.679715 55.4102C0.679715 55.4102 0.570229 28.28 17.1466 13.2756C33.723 -1.72885 60.7082 1.07425 60.7082 1.07425Z"
          fill="#F2726C"
        />
      </svg>
    </div>
    <div className={styles.Login__vector2}>
      <svg
        width="40"
        height="22"
        viewBox="0 0 40 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.6422 15.3733C39.6422 15.3733 28.6816 23.1683 17.8855 20.7279C7.0893 18.2875 0.545889 6.53596 0.545889 6.53596C0.545889 6.53596 11.5065 -1.25901 22.3027 1.18135C33.0988 3.62171 39.6422 15.3733 39.6422 15.3733Z"
          fill="#7675FD"
        />
      </svg>
    </div>
  </>
)
const Login = () => (
  <>
    <VectorLogin />
    <div className={styles.Login}>
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
