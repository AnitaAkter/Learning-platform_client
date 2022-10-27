import Blog from "../Components/Blog";
import Checkout_page from "../Components/Checkout_page";
import Courses from "../Components/Courses";
import DetailsCourse from "../Components/DetailsCourse";
import FAQ from "../Components/FAQ";
import PrivateRoute from "../Components/PrivateRoute";
import Register from "../Components/Register";


const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Home");
const { default: Main } = require("../Components/Main");
const { default: Login } = require("../Components/Login");
const { default: ErrorPage } = require("../Components/ErrorPage");


const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/home',
            element: <Home></Home>,
        },
        {
            path: '/courses',
            loader: () => fetch('https://assignment-10-courses-server-anitaakter.vercel.app/category'),
            element: <Courses></Courses>,
        },
        {
            path: '/category/:id',
            loader: ({ params }) => fetch(`https://assignment-10-courses-server-anitaakter.vercel.app/category/${params.id}`),
            element: <DetailsCourse></DetailsCourse>
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/faq',
            element: <FAQ></FAQ>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
            path: '/checkOut_page/:id',
            loader: ({ params }) => fetch(`https://assignment-10-courses-server-anitaakter.vercel.app/category/${params.id}`),
            element: <PrivateRoute><Checkout_page></Checkout_page></PrivateRoute>
        },

    ]
}]);

export default router;