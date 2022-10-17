import { Input, Col, Row } from 'antd'
import TextStarted from './TextStarted'
import Login from './Login'
const Form = () => {
  return (
    <div className="Form">
      <Row>
        <Col span={12} offset={1} style={{ padding: '100px 0px 20px 0px' }}>
          <TextStarted />
        </Col>
        <Col span={10}>
          <Login />
        </Col>
      </Row>
    </div>
  )
}

export default Form
