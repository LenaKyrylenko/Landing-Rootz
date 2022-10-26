import { Row, Col } from 'antd'
import styles from './Footer.module.scss'
import { Facebook, LinkedIn,Twitter } from './Icons'

const Footer = () => (
  <>
    <Row className={styles.Footer}>
      <Col
      xl={{span:3}}
        md={{ span: 4 }}>
        <p className={styles.Footer__title}> Contacts</p>
        <p className={styles.Footer__text}>
          2019 Rootz Foundation.
          <br />
          All rights reserved{' '}
        </p>
      </Col>
      <Col
      xl={{offset:5,span:4}}
      
        md={{ offset: 10, span: 10 }}>
        <p className={styles.Footer__second_title}> Headquarters</p>
        <p className={styles.Footer__text}>
          1234 Taliban
          <br />
          
          Los Angeles, La 1234567
         
          <br />
          
          <a href="tel:(123) 456-7890">
            (123) 456-7890
          </a>
          <br/>

          
        </p>
      </Col>

      <Col
      xl={{offset:4,span:7}}
      
      >
        <p className={styles.Footer__second_title}> Social media</p>
             <div className={styles.Footer__block}>
                <Twitter />
                <Facebook />
                    <LinkedIn />
                </div>
      </Col>
    </Row>
  </>
)
export default Footer
