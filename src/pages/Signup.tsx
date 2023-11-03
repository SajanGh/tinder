import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../validation/signup.validation";
import { FormData } from "../validation/signup.validation";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: FormData) => {
    console.log("Its working", data);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Container maxWidth="xs">
        <Box>
          <form onSubmit={handleSubmit(submitData)}>
            <Typography variant="h4" component="h1">
              Signup
            </Typography>

            <TextField
              required
              fullWidth
              margin="normal"
              autoComplete="FirstName"
              label="FirstName"
              variant="outlined"
              {...register("firstName")}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}

            <TextField
              required
              fullWidth
              margin="normal"
              autoComplete="LastName"
              label="LastName"
              variant="outlined"
              {...register("lastName")}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
            <TextField
              required
              fullWidth
              margin="normal"
              autoFocus
              autoComplete="Username"
              label="Username"
              variant="outlined"
              {...register("username")}
            />
            {errors.username && <span>{errors.username.message}</span>}
            <TextField
              required
              fullWidth
              margin="normal"
              autoComplete="email"
              label="Email Adress"
              variant="outlined"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <TextField
              required
              fullWidth
              margin="normal"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...register("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    sx={{ cursor: "pointer" }}
                    position="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <TextField
              required
              fullWidth
              margin="normal"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Confirm Password"
              {...register("confirmPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    sx={{ cursor: "pointer" }}
                    position="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </InputAdornment>
                ),
              }}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Accept Terms and Conditions"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              {" Signup"}
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
