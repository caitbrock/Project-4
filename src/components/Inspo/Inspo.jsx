import React, { useEffect, useState } from "react";
import header from "../../Header-IM.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CreateBoard from "../CreateBoard/CreateBoard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import PopupForm from "../PopupForm/PopupForm";
import Boards from "../Boards/Boards";
import "./Inspo.css";

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
});

function Inspo(props) {
  const [boards, setBoards] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("/api/boards")
        .then((response) => response.json())
        .then((boards) => {
          setBoards(boards);
        });
    }
    fetchData();
  }, []);

  console.log("hello", boards);

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
        <form
          className="interestform"
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Search Boards"
          />
          <button className="submitsearch">
            <SearchIcon />
          </button>
        </form>

<button className="create-board" onClick={() => setButtonPopup(true)}> Create Board <span><AddIcon/></span></button>
        <PopupForm trigger={buttonPopup} setTrigger= {setButtonPopup}>
        <CreateBoard />
        </PopupForm>
           </Paper>
    </ThemeProvider>

    {boards ? (
        <div
          className="Boards"
          style={{ display: "flex", justifyContent: "center", width: '100%', flexWrap: 'wrap'}}
        >
            <Boards boards={boards} />
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Inspo;