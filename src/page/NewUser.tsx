import { Paper, Stack, Typography } from "@mui/material";
import useReg from "../context/useReg";

const NewUser = () => {
  const { userContext } = useReg();

  const renderContent = () => {
    if (userContext?.user.name) {
      return <pre>{JSON.stringify(userContext, null, 2)}</pre>;
    } else {
      return (
        <Typography variant="h5" gutterBottom textAlign={"center"}>
          The user has not yet registered!
        </Typography>
      );
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Paper elevation={3} sx={{ mt: 20, width: "30%", p: 5 }}>
        {renderContent()}
      </Paper>
    </Stack>
  );
};

export default NewUser;
