import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheHeader
} from './index'

const TheLayout = () => {
  return (  
    <div >
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
      </div>
      
    </div>
  )
}

export default TheLayout
