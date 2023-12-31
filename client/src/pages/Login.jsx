import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const [inputs,setInputs] = useState({
    username: "",
    password: ""
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const {login} = useContext(AuthContext)

  const handleChange = (e) => {
   setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
    await login(inputs)
    navigate("/")
  }
  catch(err){
    setError(err.response.data)
  }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onClick={handleChange}  />
        <input required type="password" placeholder='password' name='password' onClick={handleChange}  />
        <button onClick={handleSubmit} >Login</button>
        { error && <p>{error}</p>}
        <span>Don't you have an account ? <Link to="/register" >Register</Link> </span>
      </form>
    </div>
  )
}

export default Login