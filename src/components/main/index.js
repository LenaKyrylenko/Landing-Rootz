import { useState } from 'react'
import Card from './Card'
import Headline from './Headline'
import Parrot from './Parrot'
import Counter from './Counter'
import Search from './Search'

import { UserOutlined } from '@ant-design/icons'
import { Input, Row, Col } from 'antd'

import 'antd/dist/antd.css'
import React from 'react'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.MainHome}>
      <div className={styles.Main}>
        <Row>
          <Col
            xl={{ span: 8 }}
            md={{ span: 14 }}
            sm={{offset:1, span: 14 }}
          >
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
          <Col
            xl={{ offset: 4, span: 10 }}
            md={{ offset: 6, span: 10 }}

          >
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
