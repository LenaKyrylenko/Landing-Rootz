import { useState } from 'react'
import open from '../../materials/open.png'
import {Col,Row} from 'antd'
const Open = () => (
<img src={open}/>
)

const Close = () => (
  <p>
    <svg
      width="14"
      height="4"
      viewBox="0 0 14 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.00012C0 0.447837 0.348223 0.00012207 0.777778 0.00012207L13.2222 0.00012207C13.6518 0.00012207 14 0.447837 14 1.00012C14 1.55241 13.6518 2.00012 13.2222 2.00012L0.777778 2.00012C0.348223 2.00012 0 1.55241 0 1.00012Z"
        fill="white"
      />
    </svg>
  </p>
)

const QuestionAnswer = ({question, answer}) => {
  const [openAnswer, setAnswer] = useState(false)
  return (
    <>
      <Row>
        <Col>
      <p className="QA__question">
        {question}
       
      </p>

      <p className="QA__answer">
       {openAnswer && answer}
          </p>
          <hr />
         </Col>
        <Col>
        <button className="btn QA__open" onClick={() => setAnswer(!openAnswer)}>
          {openAnswer ? <Close />:<Open /> }
          </button>
         
        </Col>
       
      </Row>
    </>
  )
}

export default QuestionAnswer
