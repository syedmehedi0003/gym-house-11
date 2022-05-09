import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='text-center '>
                <hr />
                OR
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 mt-3 d-block mx-auto'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;