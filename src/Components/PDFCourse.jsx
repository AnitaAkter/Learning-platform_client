import jsPDF from 'jspdf';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
        
    );
};

export default PDFCourse;