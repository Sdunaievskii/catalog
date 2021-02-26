import React from 'react';
import {useAuth} from '../Context/AuthContext'





const ProductList = () => {

    const { logout } = useAuth()
    
    return (
        <div>
            <input type='submit' onClick={logout}/>
        </div>

    )
}

export default ProductList;