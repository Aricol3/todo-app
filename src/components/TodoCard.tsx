import React, {useState} from "react";
import {TextField, Checkbox, FormControlLabel} from "@mui/material";
import styles from "./TodoCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import {ButtonGroup, Button} from "@mui/material";
import {v4 as uuidv4} from "uuid";

function TodoCard() {
    const [todos, setTodos] = useState<Array<React.ReactElement>>([]);

    function handleDelete(id: string) {
        console.log(todos[0].props.id);
        // todos.forEach(function(todo){
        //     console.log("todo",todo.props.id);
        //     console.log("id",id);
        // })
        // let todoToDelete = todos.findIndex(function(todo) {
        //     console.log("todo",todo.props.id);
        //     console.log("id",id);
        //     if(todo.props.id === id) return true;
        // }
        // );
        // let newTodos = todos.splice(todoToDelete,1);
        // setTodos(newTodos);
    }

    const handleCheckboxChange = (e: any) => {
        todos.map((todo) => {
            console.log(todo.props.control);
        })
    };

    function keyPress(e: any) {
        if (e.keyCode === 13) {
            const id = uuidv4();
            const newTodo = (
                <span
                    style={{display: "flex", alignItems: "center"}}
                    key={id}
                    id={id}
                >
          <FormControlLabel
              style={{wordWrap: "break-word"}}
              control={<Checkbox onChange={handleCheckboxChange}/>}
              label={e.target.value}
          />
          <CloseIcon onClick={() => handleDelete(id)}/>
        </span>
            );
            setTodos([...todos, newTodo]);
            e.target.value = "";
        }
    }

    const [showAll, setShowAll] = useState(true);
    const [showCompleted, setShowCompleted] = useState(false);
    const [showIncomplete, setShowIncomplete] = useState(false);

    function handleShowAll() {
        setShowAll(true);
        setShowCompleted(false);
        setShowIncomplete(false);
    }

    function handleShowCompleted() {
        setShowAll(false);
        setShowCompleted(true);
        setShowIncomplete(false);
    }

    function handleShowIncomplete() {
        setShowAll(false);
        setShowCompleted(false);
        setShowIncomplete(true);
    }

    return (
        <>
            <div className={styles.todoCard}>
                <TextField style={{marginBottom: '10px'}} id="change-title" label="Change Title" variant="standard"/>
                <TextField style={{margin: '10px'}} id="add-task" label="Add new task" variant="standard"
                           onKeyDown={keyPress}/>
                {todos}
                <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                >
                    <Button onClick={handleShowAll} variant={showAll ? "contained" : "outlined"}>All</Button>
                    <Button onClick={handleShowCompleted}
                            variant={showCompleted ? "contained" : "outlined"}>Completed</Button>
                    <Button onClick={handleShowIncomplete}
                            variant={showIncomplete ? "contained" : "outlined"}>Incomplete</Button>
                </ButtonGroup>

            </div>
        </>
    );

}

export default TodoCard;