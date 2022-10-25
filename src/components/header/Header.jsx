import { useState } from 'react'
import Union from '../../materials/Union'
import Close from '../../materials/Close'
import Logo from '../../materials/Logo'
import styles from './Header.module.scss'
import {Col,Row} from 'antd'
const Header = () => {
  const [show, setShow] = useState(true)
  return (
    <header className={styles.Header}>
     
     
        <div className={styles.Header__content}>
        
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
          <nav className={styles.menu__body}>
            <ul className={styles.menu__list}>
              <Row>
                  <Col>
                  <Logo />
                  
                  </Col>
                <section className={styles.menu__list_center}>
             
                  <Col>
                <li>
                  {' '}
                  <a href="" className={styles.menu__link}>
                    Home
                  </a>
                    </li>
                  </Col>
                  <Col>
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
                  </Col>
                 <Col>
                <li>
                  <a href="" className={styles.menu__link}>
                    Places
                  </a>
                    </li>
                  </Col>
                  <Col>
                <li>
                  <a href="#team" className={styles.menu__link}>
                    Team
                  </a>
                    </li>
                  </Col>
               
                <Col>
              <a href="#apply" className={styles.menu__link_button}>
                Apply
                </a> 
                  </Col>
                </section>
              </Row>
            </ul>
          </nav>
        
        </div>
        
      </div>
      <hr/>
    
      
    </header>
  )
}

export default Header
