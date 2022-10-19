import { useState } from 'react'
import Card from '../materials/Card'
import Headline from '../materials/Headline'
import Parrot from '../materials/Parrot'
import { UserOutlined } from '@ant-design/icons';
import { Input, Row, Col } from 'antd';
import CountUp from 'react-countup';
import 'antd/dist/antd.css';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
// import './styles.css';
const SearchPrefix = () =>
    <span style={{margin:'5px'}}>
    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z" fill="#666666"/>
</svg>
 </span>



  const Counter = ()=>
      <div className="content" >
      <VisibilitySensor partialVisibility offset={{ }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp duration={5} end={29000} /> : null}
          </div>
        )}
      </VisibilitySensor>
    </div>
  
const Search = () =>
<div className="search-container">
        <form action=''>
            <Input size="large"
                class="ant-input"
                placeholder="Find the place to help"
                prefix={<SearchPrefix />}
                style={{
                    border: "none", width: "60%", borderRadius: "40px",
                    onFocus: { border: "yellow" }
                }}
                onFocus={(x) => console.log('xxx ',x)}
            />
        <button className='btn search-container__btn' type="submit">
            Search
            
            </button>
            {/* <input type="text" placeholder=" &#xF002; Search.." name="search"/>
            */}
</form>
</div>
const Main = () => {
  return (
      <div className='Main'>
         
          <section>
              <Headline className='Main__title'/>
             <div className='Main__text'>
              <p>
                  The scale of the challenges facing our planet can seem
                  daunting, but we can all do something.
              </p>
                  <Search />
              </div>
          </section>
          
          <div>
              <Parrot />
              {/* <CountUp style={{zIndex:'3'}} end={100} /> */}
              <Counter/>
              <Card />
                  </div>
          
    </div>
  )
}

export default Main
