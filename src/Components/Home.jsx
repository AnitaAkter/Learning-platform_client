import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-purple-300'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Programming
                            <span className="dark:text-violet-400">World</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">What is Proramming?
                            <br className="hidden md:inline lg:hidden text-2xl" /> Want to build yourself as a problem solver?
                        </p>
                        <h3 className='text-2xl font-bold leading-none sm:text-3xl mb-4'>Learn Programming and Be a Competitve Programmer</h3>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" to={'/register'} className="px-8 py-3 bg-gray-600 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Register</Link>
                            <Link rel="noopener noreferrer" to={'/login'} className="px-8 py-3 bg-gray-600 text-lg font-semibold border rounded dark:border-gray-100">Login</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210731085719/How-Programming-Languages-are-Changing-the-World.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;