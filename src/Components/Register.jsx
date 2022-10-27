import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContextProvider';


const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { user,
        createUser,
        updateProfileDetails,
        verifyEmail,
    } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                verifyingEmail()
                Swal.fire('User has been Created')
            })
            .catch((error) => Swal.fire(error.message));



    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileDetails(profile)
            .then(() => { Swal.fire.fire("Profile has been Updated"); })
            .catch(error => Swal.fire(error.message));

    }

    const verifyingEmail = () => {
        verifyEmail()
            .then(() => {
                Swal.fire("Check Email for verification");
                navigate(from, { replace: true })
            })
            .catch((error) => {
                Swal.fire(error.message);
            });
    }


    return (
        <div className='grid justify-center lg:grid-cols-2 sm:grid-cols-1'>
            <div className="w-full max-w-md ml-20 p-8 space-y-3 rounded-xl bg-gray-900 ">
                <h1 className="text-2xl font-bold text-center text-gray-100">Register</h1>
                <form onSubmit={handleSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="name" className="block text-gray-100 ">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Provide Your Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-700 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block text-gray-100">Photo URL</label>
                        <input type="text" name="photoURL" id="PhotoURL" placeholder="Provide Your Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-700 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block text-gray-100">Email</label>
                        <input type="text" name="email" id="email" placeholder="Provide Your Email Address" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-700 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-100">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-700 focus:dark:border-violet-400" />
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm text-gray-100 dark:bg-violet-400">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-100">Already have an account?
                    <Link rel="noopener noreferrer" to={'/login'} className="underline dark:text-gray-700">Log In</Link>
                </p>

            </div>

            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210731085719/How-Programming-Languages-are-Changing-the-World.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    );
};

export default Register;