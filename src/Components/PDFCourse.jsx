import jsPDF from 'jspdf';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'

const PDFCourse = () => {
    const courseName = useLoaderData()
    console.log(courseName)

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

                <Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={courseName.image_url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h2 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{courseName.title}</h2>
                        <p>{courseName.details}</p>
                        <button onClick={handlePDFCourse} className="bg-red-400 px-8 py-2 rounded text-black">Download PDF</button>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default PDFCourse;