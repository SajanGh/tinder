import { Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <div className="flex  flex-col items-center justify-center">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h5">
        Sorry, an unexpected error has occured
      </Typography>
      <Typography variant="h6">
        <i>Page Not Found</i>
      </Typography>
    </div>
  );
};

export default ErrorPage;
