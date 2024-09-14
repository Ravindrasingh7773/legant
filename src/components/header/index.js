import React, { Fragment } from 'react'
import styles from "./style.module.css"
import Navbar from './navbar copy'
import Topbar from './topbar'


const Header = () => {
  return (
    <Fragment>
      <Topbar/>
        <Navbar/>
    </Fragment>
  )
}

export default Header