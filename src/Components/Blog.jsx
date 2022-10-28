import React from 'react';

const Blog = () => {
    return (
        <div className='bg-red-200'>
            <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
                <div className="p-3 space-y-1 xl:ml-6">
                    <h3 className="text-3xl font-semibold">What is Cors?</h3>
                    <p className="text-sm dark:text-gray-400">CORS - Cross Origin Resource Sharing. It permits us to specify (for our server) what different servers may have access, through including a pair headers to HTTP responses. This makes it feasible to serve our front-stop app from one server, and our back-stop API from a special server, with out sacrificing security.</p>
                </div>
            </div>

            <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
                <div className="p-3 space-y-1 xl:ml-6">
                    <h3 className="text-3xl font-semibold">Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className="text-sm dark:text-gray-400"> Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps
                        As a Google Cloud service, it also gives us access to other Google products and features, like Google Drive and Sheets. For instance, we can import dummy data from Google Sheets and use it temporarily to serve our app. With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if we want to use a pre-built authentication UI, we have it at our disposal as well. Firebase is a good choice if we want to deploy a working product on the cloud rapidly.</p>
                </div>


            </div>
            <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
                <div className="p-3 space-y-1 xl:ml-6">
                    <h3 className="text-3xl font-semibold">How does the private route work?</h3>
                    <p className="text-sm dark:text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>


            </div>
            <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
                <div className="p-3 space-y-1 xl:ml-6">
                    <h3 className="text-3xl font-semibold"> What is Node? How does Node work?

                    </h3>
                    <p className="text-sm dark:text-gray-400">A node is a point of intersection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes. In networking a node is either a connection point, a redistribution point, or a communication endpoint. In computer science, nodes are devices or data points on a large network, devices such a PC, phone, or printer are considers nodes.
                        Node accepts the request from the uses and sends the response, even as running with the request node operate them with a single thread. To perform I/O operations  node use the idea of threads. Thread is a series of commands that the server desires to perform. It runs parallel at the server to offer the statistics to more than one customers
                    </p>
                </div>


            </div>

        </div>

    );
};

export default Blog;