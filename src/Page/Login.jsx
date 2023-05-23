// import { Button, TextField } from '@mui/material';
import { StyledForm } from 'Global.styled';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'Redux/Auth/AuthOperations';
import { selectAuthIsLoading } from 'Redux/selectors';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const authIsLoading = useSelector(selectAuthIsLoading);
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(loginThunk({ email, password }));
  };

  return (
    <>
      {authIsLoading ? (
        <Oval
          height={80}
          width={80}
          color="#065893"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#0f5cc7"
          strokeWidth={8}
          strokeWidthSecondary={8}
        />
      ) : (
        <>
          <StyledForm $center onSubmit={handleSubmit}>
            <h1>Login form</h1>

            <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              Password
              <input type="password" name="password" />
            </label>
            <button type="submit">Log In</button>

            {/* <TextField
              id="filled-basic"
              label="E-mail"
              variant="filled"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              name="password"
              autoComplete="current-password"
              id="current-password"
              required
            />
            <Button variant="contained" type="submit">
              Submit
            </Button> */}
          </StyledForm>
        </>
      )}
    </>
  );
};
