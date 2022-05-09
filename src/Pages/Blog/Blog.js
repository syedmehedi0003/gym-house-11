import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
        <div className='p-3'>
            <h2 className='text-center'>Blog</h2>
            <h4>Authentication Vs Authorization</h4>
            <h5>Authentication</h5>
            <p>Authentication is  process to prove something true or false, right or wrong.It is a process of verifying data.Like password,user-name, email, etc.. are verifying by authentication.</p>
            <h5>Authorization</h5>
            <p>Authorization is like a permission.who can access a data that permission is given by authorization process.the user.	Authorization isn’t visible to or changeable by the user.Authorization always takes place after authentication.</p>

            <div>
                <h4>Firebase And Authentication without Firebase</h4>
                <p>Firebase is a package system.We  use Firebase for authentication, hosting and storing data. </p>
                <p>
                    Without Firebase we can authentication our website or app use React Firebase Hooks.
                </p>

                <h4>More use of Firebase</h4>
                <p>We can store data like photo or video, sent notification, email verification, reset password, quick display data, test a application using test lab etc use of Firebase</p>
            </div>
        </div>


    );
};

export default Blog;