import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const SideBar = () => {
    const [sidebar, setSidebar] = useState([]);

    useEffect(() => {
        fetch("https://assignment-10-courses-server-anitaakter.vercel.app/category")
            .then((response) => response.json())
            .then((data) => setSidebar(data))
    }, [])
    return (
        <div className="h-full p-3 space-y-2 w-60 bg-purple-200 ">
            <div className="divide-y divide-gray-700">
                <h1>Dashboard : {sidebar.length} </h1>
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <span>
                        {sidebar.map((category) => (
                            <button type="button" className="px-8 py-3 w-32 font-semibold border block rounded border-gray-900 mb-2" key={category._id}>
                                <Link to={`category/${category._id}`}>{category.title}</Link>
                            </button>
                        ))}
                    </span>
                </ul>

            </div>
        </div>
    );
};

export default SideBar;