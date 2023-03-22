import React, {useState} from "react";
import {TextField, Checkbox, FormControlLabel} from "@mui/material";
import styles from "./TodoCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import {ButtonGroup, Button} from "@mui/material";
import {v4 as uuidv4} from "uuid";

function TodoCard() {

    const [todos, setTodos]: any = useState([]);

    function handleDelete(id: string) {
        const newArray = todos.filter((todo: any) => todo.id !== id);
        setTodos(newArray);
    }

    const handleCheckboxChange = (id: string) => {
        todos.forEach((todo: any) => {
            if (todo.id === id) {
                todo.checked = !todo.checked;
            }
        })
    };

    function keyPress(e: any) {
        if (e.keyCode === 13) {
            setTodos((todos: any) => [...todos, {"name": e.target.value, "id": uuidv4(), "checked": false}]);
            e.target.value = "";
        }
    }

    const [filters, setFilters] = useState({status: "all"});

    function handleShowAll() {
        setFilters({...filters, status: "all"});
    }

    function handleShowCompleted() {
        setFilters({...filters, status: "completed"});
    }

    function handleShowIncomplete() {
        setFilters({...filters, status: "incomplete"});
    }

    return (
        <>
            <div className={styles.todoCard}>
                <TextField style={{marginBottom: '10px'}} id="change-title" label="Change Title" variant="standard"/>
                <TextField style={{margin: '10px'}} id="add-task" label="Add new task" variant="standard"
                           onKeyDown={keyPress}/>

                {todos.filter((todo:any)=> filters.status === 'all' || (filters.status === 'completed' ? todo.checked : !todo.checked)).map((todo: any) => {
                    return (
                        <span style={{display: "flex", alignItems: "center"}} key={todo.id}>        <FormControlLabel
                            style={{wordWrap: "break-word"}}
                            control={<Checkbox defaultChecked={todo.checked}
                                               onChange={() => handleCheckboxChange(todo.id)}/>} label={todo.name}/>
                            <CloseIcon
                            onClick={() => handleDelete(todo.id)}/>
                        </span>)
                })
                }

                <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                >
                    <Button onClick={handleShowAll}
                            variant={filters.status == "all" ? "contained" : "outlined"}>All</Button>
                    <Button onClick={handleShowCompleted}
                            variant={filters.status == "completed" ? "contained" : "outlined"}>Completed</Button>
                    <Button onClick={handleShowIncomplete}
                            variant={filters.status == "incomplete" ? "contained" : "outlined"}>Incomplete</Button>
                </ButtonGroup>

            </div>
        </>
    );

}

export default TodoCard;