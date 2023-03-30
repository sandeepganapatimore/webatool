import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "../Components/Copyright";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../ContextState";
function validation(input, fieldName, target) {
  for (const property in input.validity) {
    const type = input.validity[property] ? property : "";

    console.log(type, fieldName);
    switch (type) {
      case "valueMissing":
        return `${fieldName} is required`;
      case "patternMismatch":
        return `${fieldName} is not valid`;
      default:
        return "";
    }
  }
}
export default function SignUp() {
  const { Authenticate, isAuthenticated, getToken } = useAppContext();
  const [formState, setFormState] = React.useState(new Map());

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // console.log("formState", formState);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    fetch(
      `http://localhost:8000/api/user/${
        pathname.includes("signup") ? "signup" : "signin"
      }`,
      {
        method: "POST",
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          allowExtraEmails: checked,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.success && data?.data?.token) {
          Authenticate(data?.data?.token);
          console.log(isAuthenticated());
          if (isAuthenticated()) {
            navigate(`/scans`);
          }
        } else if (data?.success) {
          navigate(`/user/signin`);
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {`Sign ${pathname.includes("signup") ? "up" : "in"}`}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {pathname.includes("signup") ? (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={formState.get("firstName") ? true : false}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    helperText={
                      formState.get("firstName")
                        ? formState.get("firstName")
                        : undefined
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={formState.get("lastName") ? true : false}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    helperText={
                      formState.get("lastName")
                        ? formState.get("lastName")
                        : undefined
                    }
                  />
                </Grid>
              </>
            ) : undefined}

            <Grid item xs={12}>
              <TextField
                inputProps={{
                  inputMode: "email",
                  pattern: "^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$",
                }}
                error={formState.get("email") ? true : false}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                helperText={
                  formState.get("email") ? formState.get("email") : undefined
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={formState.get("password") ? true : false}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                helperText={
                  formState.get("password")
                    ? formState.get("password")
                    : undefined
                }
              />
            </Grid>
            {pathname.includes("signup") ? (
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      checked={checked}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="I want to receive product updates via email."
                />
              </Grid>
            ) : undefined}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {`Sign ${pathname.includes("signup") ? "up" : "in"}`}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href={
                  pathname.includes("signup") ? "/user/signin" : "/user/signup"
                }
                variant="body2"
              >
                {pathname.includes("signup")
                  ? "Already have an account? Sign in"
                  : "Create an Account"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
