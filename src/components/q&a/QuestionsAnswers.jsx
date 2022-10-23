import { useState } from 'react'
import open from '../../materials/open.png'
import close from '../../materials/close.png'
import { Col, Row } from 'antd'
import styles from './Questions.module.scss'
const Open = () => (
<img src={open}/>
)

const Close = () => (
<img style={{width:'13px', height:'2px', margin:'5px 0px'}} src={close}/>

)

const QuestionAnswer = ({question, answer}) => {
  const [openAnswer, setAnswer] = useState(false)
  return (
    <>
      <Row>
        <Col>
          <p className={styles.QA__question}>
        {question}
       
      </p>

          <p className={styles.QA__answer}>
       {openAnswer && answer}
          </p>
          <hr />
         </Col>
        <Col>
        <button className={`btn ${styles.QA__open}`} onClick={() => setAnswer(!openAnswer)}>
          {openAnswer ? <Close />:<Open /> }
          </button>
         
        </Col>
       
      </Row>
    </>
  )
}

export default QuestionAnswer
