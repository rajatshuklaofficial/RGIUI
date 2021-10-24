import React, { useEffect , useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { useHistory } from "react-router-dom";

import { getUsers,login } from '../../../actions/actions'
import { selectUsersData, selectUserToken } from '../../../selectors/selectors'

import Navbar from '../../common/Navbar'
// import './index.css'


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
    <div>
    <title>Home Page1</title>
    <Navbar />
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
