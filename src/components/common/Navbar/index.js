import React from 'react'
import './index.css'

export const PageLoading = () => {
  return(
      <div className='mainDiv'>
        <div className='logoDiv'>
          <img src ='images/logo.jpeg' className = 'logo'/>
        </div>
        <div className='loginSignup'>
          <div>Login</div>
          <div>Sign up</div>
        </div>
      </div>
    )
}

export default PageLoading