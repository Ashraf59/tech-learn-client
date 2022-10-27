import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseInitial from "../../Pages/CourseInitial/CourseInitial";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: ('/'),
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: ('/'),
                element: <Home></Home>
            },
            {
                path: ('/home'),
                element: <Home></Home>
            },
            {
                path: ('/category/:id'),
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://tech-learn-server.vercel.app/category/${params.id}`)
            },
            {
                path: ('/courses/:id'),
                element:<Courses></Courses>,
                loader: ({params}) => fetch(`https://tech-learn-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: ('/course'),
                element: <CourseInitial></CourseInitial>,
                loader: () => fetch('https://tech-learn-server.vercel.app/courses')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/faq',
                element:<FAQ></FAQ>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-learn-server.vercel.app/category/${params.id}`)
                
            }

        ]
    }
])