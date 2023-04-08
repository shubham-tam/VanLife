import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h1> Opps! An error occured {error?.message}</h1>
      <h2>
        {error?.status}&nbsp;{error?.statusText}
      </h2>
    </>
  );
};

export default Error;
