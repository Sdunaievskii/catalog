import React from 'react';
import {useAuth} from '../Context/AuthContext'


const Signup = () => {

    const {handleChange,signUp,errors} = useAuth();
    
    return (
        <section>
            <form className='form'>
                    <label>Email:</label>

                    <input  type='email'
                            id='email'
                            className='form__text form_inp'
                            placeholder='Введите email'
                            onChange={handleChange}/>                

                    <label>Password</label>

                    <input  type='password'
                            id='password'
                            className='form__password form_inp'
                            placeholder='Введите пароль'
                            onChange={handleChange}/>
                           

                    <input  type='submit'
                            className = 'btn form_inp'
                            value='Регистрация'
                            onClick={(event)=>{
                                event.preventDefault()
                                signUp()
                            }}/>
            {errors.error ? <p style={{color:'red'}}>{errors.error}</p> : ''} 
                           
            </form>
        </section>
    )
};


export default Signup;
