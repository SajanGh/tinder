import { FC } from "react";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  return (
    <div className=" bg-red-700 flex flex-col  justify-center items-center">
      <h1>Oops!</h1>
      <h5>Sorry, an unexpected error has occured</h5>
      <h2>
        <i>Not Found</i>
      </h2>
    </div>
  );
};

export default ErrorPage;
