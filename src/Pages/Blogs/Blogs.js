import React from 'react';
import  './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container col-sm-12  '>
            <h2 className='text-center text-white mt-2 fw-bold bg-dark p-5 '>Answer and Questions:</h2>

            <div className="row-container ">

                <div className='mt-4 m-5'>
                    <h2 className='text-primary'>No 1:Difference Between Authorization and Authentication:</h2>

                    <h3>Authentication:</h3>
                    <p>Authentication is the process of verifying who is the user?<br />
                       It is verify the person or user through password, pin etc.
                    </p>
                </div>
                <div className='mt-4 m-5'>
                    <h3>Authorization:</h3>
                    <p>Authorization determines what resource a user can access. <br />
                      Authorization works through settings that are implemented or <br />
                       mainatined by the  Organization.
                    </p>

                </div>

                <div className='mt-4 m-5' >
                    <h2 className='text-primary'>No 2: Why are you using firebase? What other options do you have implemented Authentication?</h2>

                    <p>Good and easy authentication system . It Is user Friendly<br  />
                      deliver and receive message in a more reliable way. <br />
                      There are some authentication options also such as  <br />
                      Azure active directory, SecureID, IBM cloud ID, Amazon cognito etc.

                      
                    </p>
                </div>

                <div className='mt-4 m-5' >
                    <h2 className='text-primary'> No3:What are the Services does the Firebase provide other Than Authentication?</h2>

                  <li>Cloud Storage.</li>
                  <li>Cloud filestore.</li>
                  <li> Firebase Realtine Database.</li>
                  <li> Firebase Hosting.</li>
                    
                </div>
                 

                



            </div>

        </div>
    );
};

export default Blogs;