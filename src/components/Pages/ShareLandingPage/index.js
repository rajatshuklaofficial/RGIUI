import React, { useEffect , useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { useHistory } from "react-router-dom";

import { getUsers,login } from '../../../actions/actions'
import { selectUsersData, selectUserToken } from '../../../selectors/selectors'

import './index.css'
import AudioPlayer from './audioPlayer'




const HomePage = ({
  users,
  getUsers,
  token,
  login,
}) => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState('')
const [isLoggedIn, setIsloggedIn] = useState(false)

const history = useHistory();

const  callLoginFunc = (()=>{
 let data = {"email":email,"password":password} 
 login(data)
})

useEffect(() => {
    if(!users) {
      getUsers()
    }
  })
  
	return (
    <div className = 'silverFull'>
    <div className = "mainDiv">
    <title>Share Landing Page</title>
    <div className = 'recordingDetails'>
    <div>
      <img className = 'logo' src = '/images/logo.webp' />
    </div>
    <div className = 'title'>
      What is money?
    </div>
    <div className = 'titleAndDate'>Money | Recorded on Aug 20, 2001</div>
    <div className = 'nameAndTime'>Noah Morthan | 06:00 PM </div>
    <AudioPlayer />
    <div className = "info"> <img src = './images/infoIcon.svg' style ={{"marginRight":"10px","height":"20px"}}/> This link will expire on 14 february 2022 </div>
    </div>
    </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    users:selectUsersData(),
    token:selectUserToken()
});


const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    return dispatch(getUsers())
  },
  login:(x) =>{
    return dispatch(login(x))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
