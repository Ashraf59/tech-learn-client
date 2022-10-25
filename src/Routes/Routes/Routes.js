import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: ('/'),
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: ('/home'),
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },

            {
                path: ('/category/:id'),
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: ('/courses/:id'),
                element:<Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])