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
import { useState } from "react";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length, task: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h3" component="h1" align="center">
          TODO
        </Typography>
        <TextField
          label="今日やることを入力"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" onClick={addTask}>
          add
        </Button>
        <List>
          {tasks.map((task) => (
            <ListItem>
              <Checkbox checked={task.completed} />
              <ListItemText primary={task.task} />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default App;
