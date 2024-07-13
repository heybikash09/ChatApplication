import React, { useState } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Contacts from './Contacts'
function SideBar() {
  return (
    <>
    <div className=' bg-sky-800 border-r-2 border-black'>
      <Navbar/>
      <Search/>
      <Contacts/>
    </div>
    </>
  )
}

export default SideBar
