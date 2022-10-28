import React from 'react';
import { Link } from 'react-router-dom'

const DetailsCourse = ({ detailsCourse }) => {
    const { title, image_url, details, _id } = detailsCourse;
    return (
        <div>
            <div className="container mx-auto">
                <div className=" text-center">
                    <h2 className="text-3xl font-bold">{detailsCourse.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col dark:bg-gray-900">
                        <Link rel="noopener noreferrer" to='#'>
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image_url} />
                        </Link>
                        <div>
                            <p>{details}</p>
                        </div>
                        <button className='bg-indigo-600 p-2 rounded'>
                            <Link to={`category/${_id}`}> Details</Link>
                        </button>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default DetailsCourse;