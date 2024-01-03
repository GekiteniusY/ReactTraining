import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SignIn from "./SignIn";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Hello World</Button>

        <Paper variant="elevation" elevation="">
          <TextField
            id="outlined-basic"
            // label="Outlined"
            value={"outlined"}
            variant="outlined"
            // onChange={}
          />
          <TextField
            id="outlined-basic"
            // label="Outlined"
            value={"outlined"}
            variant="outlined"
            // onChange={}
          />
        </Paper>
        <Stack direction="row" spacing={2}>
          <DemoPaper variant="elevation">default variant</DemoPaper>
          <DemoPaper variant="outlined">outlined variant</DemoPaper>
        </Stack>
        <SignIn />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
