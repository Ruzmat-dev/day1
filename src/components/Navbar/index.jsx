import React from 'react'
import "./style.scss"

function index() {
  return (
    <header>
        <div className="container">
            <div className="nav">
                <div className="nav__logo">
                    LOGO
                </div>
                <ul className="nav__ul">
                    <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links</a></li>
                    <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links</a></li>
                    <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links</a></li>
                    <li className="nav__ul--list"><a href="#" className="nav__ul--list-item">links</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default index