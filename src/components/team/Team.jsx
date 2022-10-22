import { useState } from 'react'
import img1 from '../../materials/img 1.png'
import img2 from '../../materials/img 2.png'
import img3 from '../../materials/img 3.png'
import React from 'react'
import LeftArrow from '../../materials/LeftArrow'
import RightArrow from '../../materials/RightArrow'
import styles from './Team.module.scss'

const OurTeam = () => {
  return (
    <div className={styles.OurTeam} id={"team"}>
      <section>
        {/* <Headline className='Main__title'/> */}
        <div>
          <p className={styles.OurTeam__title}>Our top team</p>
          <p className={styles.OurTeam__text}>
            Learn more about how you can save our planet's nature.
          </p>
                  <div className={styles.OurTeam__images}>
            <img src={img1} />
            <LeftArrow />
            <img src={img2} />
            <RightArrow />
            <img src={img3} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
