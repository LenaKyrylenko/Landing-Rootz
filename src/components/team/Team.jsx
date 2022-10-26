import { useState } from 'react'
import img1 from '../../assets/img 1.png'
import img2 from '../../assets/img 2.png'
import img3 from '../../assets/img 3.png'
import React from 'react'
import LeftArrow from '../../assets/LeftArrow'
import RightArrow from '../../assets/RightArrow'
import styles from './Team.module.scss'
import {Row,Col} from 'antd'
const OurTeam = () => {
  return (
    <div className={styles.OurTeam} id={"team"}>
     <Row>
        {/* <Headline className='Main__title'/> */}
      
        <div>
          <p className={styles.OurTeam__title}>Our top team</p>
          <p className={styles.OurTeam__text}>
            Learn more about how you can save our planet's nature.
          </p>
          <div className={styles.OurTeam__block_images}>
            <div className={styles.OurTeam__images}>
            {/* <Col> */}
              <img src={img1} alt={"first member"}  />
            
            {/* </Col> */}
            <LeftArrow />
            {/* <Col> */}

            <img src={img2} alt={"second member" } />
              
            {/* </Col> */}
            
            <RightArrow />
            {/* <Col> */}
              <img src={img3} alt={"third member" }/>
              {/* </Col> */}
            </div>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default OurTeam
