import TextReady from "./TextReady"
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import styles from './Questions.module.scss'
import QuestionAnswer from './QuestionsAnswers'
const QA = () =>

  <div className={styles.QA}>
          <Row>
            
            <Col span={12}>
                <TextReady />
            </Col>
            <Col span={12}>
                <QuestionAnswer question={" What can I do to protect our planet?"}
                    answer={`Not to make an open fire in nature and to clean up litter;
                 not to pollute open water bodies; to switch to alternative energy sources; to
                reduce the use of non-renewable resources`}
                />
                  <QuestionAnswer question={" How to save nature ecology?"}
                    answer={`Not to make an open fire in nature and to clean up litter;
                 not to pollute open water bodies; to switch to alternative energy sources; to
                reduce the use of non-renewable resources`}
                />
                   <QuestionAnswer question={" What is nature conservation?"}
                    answer={`Not to make an open fire in nature and to clean up litter;
                 not to pollute open water bodies; to switch to alternative energy sources; to
                reduce the use of non-renewable resources`}
                />
            </Col>
            </Row>
</div>
export default QA