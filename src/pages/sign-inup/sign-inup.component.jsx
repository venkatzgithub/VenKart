import React from "react";
import './sign-inup.styles.scss';
import Signin from "../../components/sign-in/sign-in.component.jsx";
import SignUp from '../../components/sign-up/sign-up.component.jsx';
const Signinup=()=>
{
    return(
<div className="sign-in-sign-up">
    <Signin></Signin>    <SignUp />
</div>

)




}
export default Signinup;