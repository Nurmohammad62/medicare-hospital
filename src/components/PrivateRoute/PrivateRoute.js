import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {isLoading,user} = useAuth()
    if(isLoading){
        return <Spinner animation="grow" variant="warning" />
    }
    return (
        <Route
            {...rest}
            render={({location}) => user.email ?
            children
            :
            <Redirect
                to={{
                    pathname:'/login',
                    state: {from: location}
                }}
            ></Redirect>
        }
        ></Route>
    );
};

export default PrivateRoute;