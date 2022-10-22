import { Input, Col, Row } from 'antd'
import TextStarted from './TextStarted'
import Login from './Login'
const Form = () => {
  return (
    <div className="Form" id="apply">
      <Row>
        <Col span={8}  style={{ padding: '100px 0px 20px 0px' }}>
          <TextStarted />
        </Col>
        <Col span={12}>
          <Login />
        </Col>
      </Row>
    </div>
  )
}

export default Form
