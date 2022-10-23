import { Input, Col, Row } from 'antd'
import TextStarted from './TextStarted'
import Login from './Login'
import styles from './Contact.module.scss'
const Form = () => {
  return (
    <div className={styles.Form} id="apply">
      <Row>
        <Col span={10}>
          <TextStarted />
        </Col>
        <Col offset={1} span={13}>
          <Login />
        </Col>
      </Row>
    </div>
  )
}

export default Form
