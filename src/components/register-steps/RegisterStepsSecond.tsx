import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { RegisterStepProps } from "../../type";
import { createUser } from "sdk";
import { RegisterInput } from "../../styles/register";
import { useNavigate } from "react-router-dom";
import { newsLetterOpt } from "./helper";
import useReg from "../../context/useReg";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const RegisterStepsSecond = ({
  handleChangeRegister,
  user,
  handleSelect,
}: RegisterStepProps) => {
  const navigate = useNavigate();
  const { setUserContext } = useReg();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createUser(user);
      setUserContext(res);
      navigate("/new-user");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Step 2: Account Preferences
      </Typography>
      <Typography variant="body1" gutterBottom>
        Congratulations on completing Step 1 of the registration process!
      </Typography>
      <Typography variant="body1" gutterBottom>
        In Step 2, please provide us more information.
      </Typography>
      <RegisterInput
        fullWidth
        id="email-basic"
        label="email"
        variant="outlined"
        name="email"
        value={user?.email}
        onChange={handleChangeRegister}
        type="email"
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="news-select-label">newsletter</InputLabel>
        <Select
          labelId="news-select-label"
          id="news-select"
          value={user?.newsletter}
          label="newsletter"
          name="newsletter"
          onChange={handleSelect}
        >
          {newsLetterOpt.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        fullWidth
        disabled={
          !user?.newsletter ||
          !user?.email ||
          !user?.name ||
          !user?.age ||
          loading
        }
      >
        {loading ? "Loading..." : "submit"}
      </Button>
      {[user?.age, user?.name].every((item) => !item) && (
        <Typography variant="caption" color="error" gutterBottom>
          It seems you haven't provided your name and age. Please make sure to
          fill in both fields so we can continue.{" "}
          <Link component={RouterLink} to="/register?step=1">
            Back
          </Link>
        </Typography>
      )}
    </Box>
  );
};

export default RegisterStepsSecond;
