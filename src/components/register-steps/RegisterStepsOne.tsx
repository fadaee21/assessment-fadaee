import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RegisterStepProps } from "../../type";
import { RegisterInput } from "../../styles/register";

const RegisterStepsOne = ({
  setSearchParams,
  handleChangeRegister,
  user,
}: RegisterStepProps) => {
  const handleStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ step: "2" });
  };
  return (
    <Box component="form" sx={{ width: "100%" }} onSubmit={handleStep}>
      <Typography variant="h5" gutterBottom>
        Step 1: Personal Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to our registration process!
      </Typography>
      <Typography variant="body1" gutterBottom>
        In Step 1, please provide your basic personal information.
      </Typography>
      <RegisterInput
        fullWidth
        id="name-basic"
        label="name"
        variant="outlined"
        name="name"
        value={user?.name}
        onChange={handleChangeRegister}
        type="text"
      />
      <RegisterInput
        fullWidth
        id="age-basic"
        label="age"
        variant="outlined"
        name="age"
        value={user?.age}
        onChange={handleChangeRegister}
        type="number"
      />
      <Button
        variant="contained"
        type="submit"
        fullWidth
        disabled={!user?.name || !user?.age}
      >
        Next Step
      </Button>
    </Box>
  );
};

export default RegisterStepsOne;
