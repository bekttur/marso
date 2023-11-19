import React from 'react'
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='not-found-block'>
        <div className='not-found'>
            <h1 className='found-header'>404</h1>
            <div className='found-border'></div>
            <p>This page could not be found.</p>
        </div>
    </div>
  )
}

export default NotFound