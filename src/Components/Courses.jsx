import React from 'react';
import DetailsCourse from './DetailsCourse';
import SideBar from './SideBar';
import { useLoaderData } from 'react-router-dom'


const Courses = () => {
    const detailsCourse = useLoaderData();
    return (
        <div className='grid grid-cols-6 bg-purple-300'>
            <div className='col-span-2'>
                <SideBar></SideBar>
            </div>
            <div className='col-span-4'>

                <section className="py-6 grid lg:grid-cols-2 sm:grid-cols-1 sm:py-12 dark:bg-gray-800">
                    {
                        detailsCourse.map(detailsCourse => <DetailsCourse key={detailsCourse._id} detailsCourse={detailsCourse}></DetailsCourse>)
                    }
                </section>
            </div>
        </div>
    );
};

export default Courses;