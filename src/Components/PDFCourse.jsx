import jsPDF from 'jspdf';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PDFCourse = () => {
    const courseName = useLoaderData()

    const { title, image_url, details, _id } = courseName;
    console.log(title);
    const handlePDFCourse = () => {
        const doc = new jsPDF("p", "pt", "a4")
        doc.html(document.querySelector("#downloadJsPDF"),
            {
                callback: function (pdf) {
                    pdf.save("js.PDF")
                }
            }
        )
    }
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div id='downloadJsPDF' className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <button onClick={handlePDFCourse} type="primary" className="inline-flex  items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-indigo-700 md:w-auto hover:bg-black hover:text-white  focus:shadow-outline focus:outline-none">
                    Download PDF
                </button>
                <Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={image_url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
                        <p>{details}</p>
                    </div>
                </Link>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400 hover:text-white">
                        <Link to={`/checkout/${_id}`}>
                            Premium Access
                        </Link>
                    </button>
                </div>
            </div>
        </section>

    );
};

export default PDFCourse;







