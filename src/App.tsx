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
import Card from "@mui/material/Card";
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length, text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { id: task.id, text: task.text, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 345, width: "90%", padding: "20px 0" }}>
        <Typography variant="h3" component="h1" align="center">
          TODO
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            margin: "15px auto 0",
          }}
        >
          <TextField
            label="今日やることを入力"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" onClick={addTask}>
            add
          </Button>
        </Box>

        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <Checkbox
                checked={task.completed}
                onClick={() => toggleTask(task.id)}
              />
              <ListItemText
                primary={task.text}
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "text.secondary" : "text.primary",
                }}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(task.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
  );
}

export default App;
