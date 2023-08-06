import { Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Typography variant="body1">
        Go back to the{" "}
        <Link component={RouterLink} to="/">
          homepage
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
