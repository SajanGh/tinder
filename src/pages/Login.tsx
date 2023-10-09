import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Copyright } from "@mui/icons-material";
import { Link } from "react-router-dom";
interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <Container maxWidth="xs">
        <Box>
          <Typography variant="h5" component="h1">
            Sign in
          </Typography>
          <Box>
            <TextField
              required
              fullWidth
              margin="normal"
              autoFocus
              autoComplete="email"
              label="Email Address"
              variant="outlined"
            />

            <TextField
              required
              fullWidth
              margin="normal"
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
            <div>
              <Grid container>
                <Grid item xs={4}>
                  <Link to="#">
                    <Typography variant="body2">Forgot Password?</Typography>
                  </Link>
                </Grid>
                <Grid item xs={8}>
                  <Link to="">
                    <Typography variant="body2">
                      {"Don't have an account? Sign up"}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </div>
            <div className="flex items-center justify-center mt-8 mb-5">
              <Typography>
                Copyright
                <Copyright />
                Your Website 2023
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
