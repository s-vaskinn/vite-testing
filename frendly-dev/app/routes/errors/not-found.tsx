import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300">
            <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
            <p className="text-xl mb-8">Page Not Found</p>
            <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;