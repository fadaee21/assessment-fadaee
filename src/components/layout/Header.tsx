import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Sheypoor } from "../icon/Sheypoor";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar component="nav" position="static" sx={{ backgroundColor: "#fff" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton disableRipple onClick={() => navigate("/")}>
          <Sheypoor sx={{ width: 120, height: 50 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
