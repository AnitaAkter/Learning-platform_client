import React from 'react';
import { Link } from 'react-router-dom'

const AllCourse = ({ downloadablecourse }) => {

    const { _id, image_url, detail, title } = downloadablecourse;
    return (
        <div className='bg-purple-300'>
            <Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                <img alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h2 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h2>
                    <p></p>

                </div>
            </Link>
        </div>
    );
};

export default AllCourse;