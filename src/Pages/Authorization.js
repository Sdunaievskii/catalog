import React, {useState,useContext,useEffect} from 'react';
import  firebase from 'firebase';
import "firebase/auth";


const Authorization = () => {

    const [formState, setFormState] = useState({
        email:'',
        password:''
    });
    const [statusUser, getStatusUser] = useState({
        status:false
    })

    const [errors, setErrors] = useState({
        error:'',
    })
    
    const handleChange = ({target:{id, value}})=>{
        setFormState({...formState,[id]:value}) 
    }

    const signUp = () => {
        const {email, password} = formState;
       
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err)=> {
                setErrors({error:err.message})
            });

            firebase.auth().onAuthStateChanged((user) =>{
                if (user) {
                    getStatusUser(!statusUser.status)
                   
                } 
            })              
    }
    console.log(statusUser, 'вход выполнене');

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


export default Authorization;
