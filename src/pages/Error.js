import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops bhaiya!</h1>
      <h2>
        {error.status} - {error.statusText}
      </h2>
      <p>{error.data || error.message}</p>
    </div>
  );
};

export default Error;
