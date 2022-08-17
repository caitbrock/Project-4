import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: (theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: (theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function DeletableChips(props) {
  const [chipData, setChipData] = React.useState([
  ]);

  React.useEffect(() => {
  const interestData = props.user.interests.map((interest, idx) => ({key: idx, label: interest}))
  setChipData(interestData)
  }, [props.user.interests])


  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  // const requestSearch = (searchedVal: label) => {
  //   const filteredRows = originalRows.filter((row) => {
  //     return row.name.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   setRows(filteredRows);
  // };

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };


  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#FB9A34',
      },
      secondary: {
        main: '#21302D',
      },
      info: { main: '#FE7942' },
    }, 

    overrides: {
MuiChip: {
  deletableColorSecondary: {
        '&:hover': {
            backgroundColor: '#ACDAF0',
        }
    }
}
}
})

  return (
    <ThemeProvider theme={customTheme}>
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'no-wrap',
        listStyle: 'none',
        p: 3,
        m: 2,
      }}
      component="ul"
    >

<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Add new interest…"
              inputProps={{ 'aria-label': 'search' }}

            />
          </Search>

      {chipData.map((data) => {
        let icon;

        return (
          <ListItem key={data.key}>
            <Chip
              color='secondary'
              icon={icon}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
    </ThemeProvider>
    )
}
