import { useState } from 'react'
import Union from '../../materials/Union'
import Close from '../../materials/Close'
import Logo from '../../materials/Logo'
import styles from './Header.module.scss'
const Header = () => {
  const [show, setShow] = useState(true)
  return (
    <header className={styles.Header}>
      <div className={styles.Header__content_container}>
       
        <div
          onClick={() => setShow(!show)}
          className={
            show
              ? styles.Header__burger
              : `${styles.Header__burger} ${styles.active}`
          }
        >
          {' '}
          <span></span>
         
        </div>
      
      
       
        <div
          className={
            show
              ? `${styles.Header__menu}`
              : `${styles.Header__menu}  ${styles.active} `
          }
        >
          {' '}
          {/* <div className="menu_icon icon-menu"> */}
          {/* {show ? <Union onClick={() => setShow(false)} />
            :
            <Close onClick={() => setShow(true)} />
          
          } */}
          {/* </div> */}
          <nav className={styles.menu__body}>
            <ul className={styles.menu__list}>
               <Logo />
              <section className={styles.menu__list_center}>
                <li>
                  {' '}
                  <a href="" className={styles.menu__link}>
                    Home
                  </a>
                </li>
                <li>
                  {' '}
                  <a
                    href="#mission"
                    style={{ whiteSpace: 'nowrap' }}
                    className={styles.menu__link}
                  >
                    Our mission
                  </a>
                </li>
                <li>
                  <a href="" className={styles.menu__link}>
                    Places
                  </a>
                </li>
                <li>
                  <a href="#team" className={styles.menu__link}>
                    Team
                  </a>
                </li>
              </section>
              <a href="#apply" className={styles.menu__link_button}>
                Apply
              </a>
            </ul>
          
          </nav>
          <hr></hr>
        </div>
      </div>
    </header>
  )
}

export default Header
