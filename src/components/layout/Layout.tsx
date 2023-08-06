import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
