import { useRouter } from 'next/router';
import React from 'react'
import { useAuth } from './auth'

export const withPublic = (Component) => {
    return function WithPublic(props){
    const auth = useAuth();
    const router = useRouter();

    if(auth.user){
        router.replace("/Dashboard");
        return <h1>Loading...</h1>
    }
    return <Component auth={auth} {...props}/>
    }
}

export const withProtected = (Component) => {
    return function WithProtected(props){
        const auth = useAuth();
        const router = useRouter();
    
        if(!auth.user){
            router.replace("/");
            return <h1>Loading...</h1>
        }
        return <Component auth={auth} {...props}/>
        }
  }
