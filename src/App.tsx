import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h3" component="h1" align="center">
          TODO
        </Typography>
        <TextField label="task" />
        <Button variant="contained">add</Button>
        <List>
          <ListItem>
            <Checkbox />
            <ListItemText primary="Single-line item" />
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default App;
