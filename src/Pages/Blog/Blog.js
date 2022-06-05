import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
        <div className='p-3'>
            <h2 className='text-center'>Blog</h2>
            < hr className='p-0  mb-3' />
            <div>
                <h4> Difference between javascript and nodejs</h4>
                <p>
                    javascript is a client side scripting language and nodejs is a server side scripting language. javascript is used to create web pages and nodejs is used to create web servers. javascript is a programming language and node js is a runtime for javascript</p>

                <h4> When should you use nodejs and when should you use mongodb</h4>
                <p>when we want to create a server we use nodejs and when we want to create a database we use mongodb. when we work with i/o, realtime, websockets we use nodejs. when we work with nosql, we use mongodb.</p>


                <h4>What is the purpose of jwt and how does it work</h4>
                <p>  jwt is a json web token which is a unique token that is used to identify the user. It is used to authenticate the user and to authorize the user to access the resources. It is used to protect the resources from unauthorized access.</p>

            </div>
        </div>


    );
};

export default Blog;