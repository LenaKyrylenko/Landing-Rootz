import { Input, Col, Row } from 'antd'
import TextStarted from './TextStarted'
import Login from './Login'
import styles from './Contact.module.scss'
const Form = () => {
  return (
    <div className={styles.Form} id="apply">
      <Row>
        <Col xl={{ span: 10 }}
          md={{ span: 20 }}
         xs={{ span: 17 }}
          
        
        >
          <TextStarted />
        </Col>
        <Col xl={{ span: 11 }}
     
          md={{ offset: 3, span: 18 }}
          xs={{ offset: 3, span: 18 }}


        >
          <Login />
        </Col>
      </Row>
    </div>
  )
}

export default Form
