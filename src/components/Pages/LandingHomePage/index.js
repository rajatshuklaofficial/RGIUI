import React, { useEffect , useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { useHistory } from "react-router-dom";

import { getUsers,login } from '../../../actions/actions'
import { selectUsersData, selectUserToken } from '../../../selectors/selectors'

import Navbar from '../../common/Navbar'
import './index.css'


const LandingHomePage = ({
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
    <div className='mainDivHomePage'>
    <title>Home Page</title>
    <Navbar />
    <div>
    <div className='sloganText'>
      Matching Great oppartunities with world-class companies
    </div>
    <div className='flexContainer'>
      <div className='verticalFlex'>
        <div className='roundButton'>Buisness</div>
        <div className='infoParagraph'>Relevant Candidates for Enterprises
RozgarInfo lets you engage or source top employees, while also enabling you to assess, interview and upskill them with ease.</div>
        <div className='squareButton'>HIRE NOW</div>
        <div className='textButton'>Post Jobs</div>
      </div>
      <div className='verticalFlex'>
        <div className='roundButton'>Job Seekers</div>
        <div className='infoParagraph'>Relevant Jobs for Freshers and Experienced
RozgarInfo lets you engage in searching top employers, while also enabling you to assess, interview and upskill them with ease.</div>
        <div className='squareButton'>SEARCH JOB NOW</div>
        <div className='textButton'>Post your resume</div>
      </div>
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
)(LandingHomePage)
