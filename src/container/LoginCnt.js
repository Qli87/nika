import { connect } from 'react-redux'
import { getLoggedUser_request, login_request } from '../action/login.action'
import Login from '../component/Login'

const mapStateToProps = state => ({
    user: state.loginReducer.user,
    token: state.loginReducer.token,
    error: state.loginReducer.error
})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login_request(user)),
    getLoggedUser: (token) => dispatch(getLoggedUser_request(token))
})

const LoginCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginCnt