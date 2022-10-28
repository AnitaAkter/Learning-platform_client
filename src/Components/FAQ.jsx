import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-purple-300'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">Learn Programming,Be a Programmer.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Programming?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Programming is the process of giving machines a set of instructions that describe how a program should be carried out. Programmers will spend their whole careers learning a variety of programming languages and tools so they can effectively build computer programs. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why Programming is so important?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">In the digital age that we are in now, the ability to communicate with computers is essential as our lives depend on them. Many new jobs will depend on programming, and existing jobs that will require coding skills will grow exponentially because most services and products are being digitised. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the types of Programming?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">There are hundreds of programming languages in existence. Developers will first consider the needs of the application so they can decide which languages would be appropriate to use. Here are a few popular programming languages: Python,JavaScript, C/C++, Java, C#,Ruby, PHP. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;