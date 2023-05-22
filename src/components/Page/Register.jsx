// import { Button, TextField } from '@mui/material';
import { StyledForm } from 'Global.styled';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'Redux/Auth/AuthOperations';
import { selectAuthIsLoading } from 'Redux/selectors';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const authIsLoading = useSelector(selectAuthIsLoading);
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log(email, password);
    dispatch(registerThunk({ name, email, password }));
  };
  return (
    <>
      {' '}
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
            <h1>Registration form</h1>
            {/* <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
            <TextField
              id="filled-basic"
              label="E-mail"
              variant="filled"
              type="email"
              name="email"
              autoComplete="email"
              required
            /> */}
            {/* <TextField
              label="Password"
              variant="filled"
              type="password"
              name="password"
              autoComplete="new-password"
              id="new-password"
              required
              minLength={7}
            /> */}
            {/* <Button variant="contained" type="submit">
              Submit
            </Button> */}
          </StyledForm>
        </>
      )}
    </>
  );
};
