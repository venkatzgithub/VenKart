import React from 'react';
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custombutton/custombutton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class Signin extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleChange=event=>{
       const {value,name}=event.target;
       this.setState({
           [name]:value
       });
    

    }
    handlesubmit=event=>
    {
        event.preventDefault();
        this.setState({
            email:"",password:""
        });
        console.log(this.state.password);
    }
    render()
    
    {
        
        return <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignin="isGoogleSignin">
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    }
}

export default Signin;