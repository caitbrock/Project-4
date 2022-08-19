import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import "./DeletableChips.css";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function DeletableChips(props) {
  const [chipData, setChipData] = React.useState([]);

  React.useEffect(() => {
    const interestData = props.user.interests.map((interest, idx) => ({
      key: idx,
      label: interest,
    }));
    setChipData(interestData);
  }, [props.user.interests]);

  const [newInterest, setNewInterest] = React.useState("");
  const handleInterestChange = (evt) => {
    setNewInterest(evt.target.value);
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

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

  return (
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
          onSubmit={(evt) => {
            evt.preventDefault();
            props.updateInterest(evt, newInterest);
          }}
        >
          <input
            type="text"
            placeholder="Add new interest…"
            onChange={handleInterestChange}
          />
          <button className="submitsearch">
            <SearchIcon />
          </button>
        </form>

        {chipData.map((data) => {
          let icon;

          return (
            <>
            <ListItem key={data.key}>
              <Chip
                color="secondary"
                icon={icon}
                label={data.label}
                onDelete={handleDelete(data)}
              />
            </ListItem>

            </>
          );
        })}
      </Paper>
    </ThemeProvider>
  );
}
