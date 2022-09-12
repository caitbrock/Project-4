import React from "react";
import header from "../../Header-IM.jpg";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#FB9A34",
    },
    secondary: {
      main: "#21302D",
    },
    info: { main: "#FE7942" },
  },

  overrides: {
    MuiChip: {
      deletableColorSecondary: {
        "&:hover": {
          backgroundColor: "#ACDAF0",
        },
      },
    },
  },
});

function Inspo() {
  return (
    <>
      <div
        className="bannerheader"
        style={{ backgroundImage: `url(${header})` }}
      ></div>
      <ThemeProvider theme={customTheme}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 3,
            m: 2,
          }}
          component="ul"
        >
          <form className="interestform" autoComplete="off">
            <input type="text" placeholder="Search Boards" />
            <button className="submitsearch">
              <SearchIcon />
            </button>
          </form>
          <ListItem></ListItem>
        </Paper>
      </ThemeProvider>
      <div
        className="BoardImages"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <div
          className="imagecard"
          style={{ margin: "20px", maxWidth: 350, minWidth: 350 }}
        >
          <div className="imagecontent">
            <div className="upload-image" component="img"></div>
            <div className="image-title">
              {" "}
              <h5>Paris - 2023</h5>
            </div>
            <div className="image-desription">
              {" "}
              <h6>Treat yourself!</h6>
            </div>
          </div>
        </div>

        <div
          className="imagecard"
          style={{ margin: "20px", maxWidth: 350, minWidth: 350 }}
        >
          <div className="imagecontent">
            <div className="upload-image" component="img"></div>
            <div className="image-title">
              {" "}
              <h5>Must Sees!!!</h5>
            </div>
            <div className="image-desription">
              {" "}
              <h6>The best of the best</h6>
            </div>
          </div>
        </div>

        <div
          className="imagecard"
          style={{ margin: "20px", maxWidth: 350, minWidth: 350 }}
        >
          <div className="imagecontent">
            <div className="upload-image" component="img"></div>
            <div className="image-title">
              {" "}
              <h5>Weekend Home</h5>
            </div>
            <div className="image-desription">
              {" "}
              <h6>To Dos Aug 19 - 24</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inspo;
