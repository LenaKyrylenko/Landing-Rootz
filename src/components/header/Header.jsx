import { useState } from 'react'

import styles from './Header.module.scss'
import { Col, Row } from 'antd'
import logo from '../../assets/Logo.png'
const Header = () => {
  const [show, setShow] = useState(true)
  return (
    <header className={styles.Header}>
      <div className={styles.Header__content}>
        <Col xl={{ span: 4 }}
        md={{span:5}}
        >
          <div className={styles.Header__content_logo}>
           <a href={"#"}>
              <img src={logo} alt="logo"/>
            
            </a>
          </div>
        </Col>
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
          <Row 
          >
            <ul className={styles.menu__list}>
              <nav className={styles.menu__body}>
                <section className={styles.menu__list_center}>
                  <Col md={{offset:7}}>
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
              </nav>{' '}
            </ul>
          </Row>
         
        </div>
      
      </div>
    </header>
  )
}

export default Header
