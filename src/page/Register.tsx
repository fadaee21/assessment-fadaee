import { useState, useCallback } from "react";
import { InputChangeEvent, NewsLetter, User } from "../type";
import RegisterStepsOne from "../components/register-steps/RegisterStepsOne";
import RegisterStepsSecond from "../components/register-steps/RegisterStepsSecond";
import { Paper, Container, SelectChangeEvent, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState<User>({
    name: "",
    age: "",
    email: "",
    newsletter: "",
  });
  const [searchParams, setSearchParams] = useSearchParams({ step: "1" });

  const handleChangeRegister = useCallback((e: InputChangeEvent): void => {
    const { name, value } = e.target;
    setUser((prevVal) => ({ ...prevVal, [name]: value }));
  }, []);

  const handleSelect = useCallback((e: SelectChangeEvent) => {
    setUser((prevUser) => ({
      ...prevUser,
      newsletter: e.target.value as NewsLetter,
    }));
  }, []);
  // Render the Register component by checking if the "step" parameter is either set to "1" or not set at all
  const RegisterStepComponent =
    searchParams.get("step") === "1" || !searchParams.get("step")
      ? RegisterStepsOne
      : RegisterStepsSecond;

  return (
    <Container maxWidth="sm">
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: `calc(100vh - 85px)` }}
      >
        <Paper elevation={3} sx={{ p: 3, width: "90%" }}>
          <RegisterStepComponent
            handleChangeRegister={handleChangeRegister}
            user={user}
            handleSelect={handleSelect}
            setSearchParams={setSearchParams}
          />
        </Paper>
      </Stack>
    </Container>
  );
};

export default Register;
