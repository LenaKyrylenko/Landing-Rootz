import { useState } from 'react'
import open from '../../assets/open.png'
import close from '../../assets/close.png'
import { Col, Row } from 'antd'
import styles from './Questions.module.scss'
const Open = () => <img src={open} />

const Close = () => (
  <img
    style={{ width: '13px', height: '2px', margin: '5px 0px' }}
    src={close}
  />
)

const QuestionAnswer = ({ question, answer }) => {
  const [openAnswer, setAnswer] = useState(false)
  return (
    <>
      <Row>
        <Col
          // xl={{span:7}}
          // md={{ span: 6 }}
        >
          <p className={styles.QA__question}>{question}</p>

          <p className={styles.QA__answer}>{openAnswer && answer}</p>
        </Col>

        <Col
          // xl={{span:2}}
          
          // md={{ span: 4 }}
        >     <button
          className={`btn ${styles.QA__open}`}
          onClick={() => setAnswer(!openAnswer)}
        >
         {openAnswer ? <Close /> : <Open />}
        </button>
        </Col>{' '}
      </Row>
    </>
  )
}

export default QuestionAnswer
