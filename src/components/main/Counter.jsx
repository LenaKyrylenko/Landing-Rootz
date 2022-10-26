import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'
import { useState } from 'react'
import styles from './Main.module.scss'

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
                
                <CountUp className={styles.Count} start={0} end={counter ? 29128 : 0} duration={3} />
        </VisibilitySensor>
      </div>
    )
}

export default Counter