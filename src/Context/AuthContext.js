import React, { useContext, useState, useEffect } from "react";
import firebase from 'firebase';
import "firebase/auth";
import { useHistory } from "react-router-dom"


const AuthContext = React.createContext();



export  const useAuth = () =>  {
    return useContext(AuthContext)
  }


export const AuthProvider =({children}) => {

    const history  = useHistory();

    const [formState, setFormState] = useState({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState({
        error:'',
    });

    const [statusUser, setStatusUser] = useState(true)
    const [currentUser, setCurrentUser] = useState();

   
    
    const handleChange = ({target:{id, value}})=>{
        setFormState({...formState,[id]:value}) 
    }

    useEffect(() => {

        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
            setStatusUser(false)
        })
    
        return unsubscribe
      }, [])

    const signUp = () => {
        const {email, password} = formState;
       
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((err)=> {
                setErrors({error:err.message})
                
            });

        console.log(statusUser);
      
    }
    const logout = () => {
        firebase.auth().signOut();  
        history.push("/login")
      

      }

    const signIn = () => {
        const {email, password} = formState;
       
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res =>{
            setStatusUser(true)
            history.push("/")
        })

        .catch((err)=> {
                setErrors({error:err.message})
                console.log('');
            });
            console.log(statusUser);
    }


    return (
        <AuthContext.Provider value ={{signUp, handleChange, errors, signIn, logout, currentUser}}>
                {children}
        </AuthContext.Provider>
    )
}


