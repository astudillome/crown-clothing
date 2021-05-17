import React from 'react';
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component.jsx'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => (
    <div className="sing-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage