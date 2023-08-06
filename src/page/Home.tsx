import { Link as RouterLink } from "react-router-dom";
import { Button, Container, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: `calc(100vh - 85px)` }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Our Website!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Click the button to register as a new user.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="register"
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
