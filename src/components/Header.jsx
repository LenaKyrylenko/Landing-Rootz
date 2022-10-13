import { useState } from 'react'
import Union from '../materials/Union'
import Close from '../materials/Close'
import Logo from '../materials/Logo'
const Header = () => {
  const [show, setShow]=useState(true)
  return (
    <header className="Header">
      <div className="Header__content_container">
        <div className="Header__menu menu">
          {' '}
          {/* <div className="menu_icon icon-menu"> */}
         
          {show ? <Union onClick={() => setShow(!show)} />
            :
            <Close onClick={() => setShow(!show)} />
          
          }

          {/* </div> */}

          <nav className="menu__body">
             <ul className={show ? "menu__list" : "none"}>
            <Logo />
          <secion className='menu__list_center'>
              <li> <a href="" className="menu__link">Home</a></li>
              <li> <a href="" style={{whiteSpace: "nowrap" }} className="menu__link">Our mission</a></li>
              <li><a href="" className="menu__link">Places</a></li>
              <li><a href="" className="menu__link">Team</a></li>
              </secion>
            <button href="" className="menu__link_button">Apply</button>
            </ul>
          </nav>
          <hr style={{ width: "100%", color: "black", backgroundColor: "black" }}></hr>
        </div>
      </div>
    </header>
  )
}

export default Header
