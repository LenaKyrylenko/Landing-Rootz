import { useState } from 'react'
import Card from '../../materials/Card'
import Headline from '../../materials/Headline'
import Parrot from '../../materials/Parrot'
import { UserOutlined } from '@ant-design/icons'
import { Input, Row, Col } from 'antd'
import CountUp from 'react-countup'
import 'antd/dist/antd.css'
import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './Main.module.scss'

// import './styles.css';
const SearchPrefix = () => (
  <span style={{ margin: '5px' }}>
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z"
        fill="#666666"
      />
    </svg>
  </span>
)

const Counter = () => {
  const [counter, setCounter] = useState(false)
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter(true)
    }
  }
  return (
      <div className={styles.Counter}>
          <p> Members </p>
      <VisibilitySensor
        onChange={onVisibilityChange}
        offset={{
          top: 10,
        }}
        delayedCall
          >
              
        <CountUp start={0} end={counter ? 29128 : 0} duration={3} />
      </VisibilitySensor>
      {/* <VisibilitySensor partialVisibility offset={{}}>
      {({ isVisible }) => (
        <div>
          <p> Members </p>
          {isVisible ? <CountUp   duration={5} end={29128} /> : null}
        </div>
      )}
    </VisibilitySensor> */}
    </div>
  )
}

const Search = () => (
  <div className={styles.searchContainer}>
    <form action="">
      <Input
        size="large"
        class="ant-input"
        placeholder="Find the place to help"
        prefix={<SearchPrefix />}
        style={{
          border: 'none',
          width: '60%',
          borderRadius: '40px',
          onFocus: { border: 'yellow' },
        }}
        onFocus={(x) => console.log('xxx ', x)}
      />
      <button className={styles.searchContainer__btn} type="submit">
        Search
      </button>
    </form>
  </div>
)
const Main = () => {
  return (
    <div className={styles.MainHome}>
      <div className={styles.Main}>
        <Row>
          <Col span={8}>
            <section>
              <Headline className={styles.Main__title} />
              <div className={styles.Main__text}>
                <p>
                  The scale of the challenges facing our planet can seem
                  daunting, but we can all do something.
                </p>
                <Search />
              </div>
            </section>
          </Col>
          <Col offset={4} span={10}>
            <Parrot />

            <Counter />
            <Card />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Main
