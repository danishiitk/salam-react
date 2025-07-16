import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-2xl text-gray-700 mb-2">
          {error.status} - {error.statusText}
        </h2>
        <p className="text-lg text-gray-600">{error.data || error.message}</p>
        <p className="mt-6 text-md text-gray-500">Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
};

export default Error;
