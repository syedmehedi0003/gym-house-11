import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
        <div className='p-3'>
            <h2 className='text-center'>Blog</h2>

            <h4> Difference between javascript and nodejs</h4>
            <p>
                javascript is a client side scripting language and nodejs is a server side scripting language. javascript is used to create web pages and nodejs is used to create web servers. javascript is a programming language and node js is a runtime for javascript</p>

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