import React, {useState} from "react";
import {TextField, Checkbox, FormControlLabel} from "@mui/material";
import styles from "./TodoCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import {ButtonGroup, Button} from "@mui/material";
import {v4 as uuidv4} from "uuid";

function TodoCard() {
    const [todos, setTodos]: any = useState([]);

    function handleDelete(id: string) {
        // todos.forEach((todo) => {
        //     // console.log("todo",todo.props.id);
        //     // console.log("id",id);
        //
        // })
        // console.log(todos)
        // let todoToDelete = todos.findIndex(function(todo) {
        //     console.log("todo",todo.props.id);
        //     console.log("id",id);
        //     if(todo.props.id === id) return true;
        // }
        // );
        // let newTodos = todos.splice(todoToDelete,1);
        // setTodos(newTodos);
        // //

        const newArray = todos.filter((todo: any) => todo.id !== id);
        setTodos(newArray);
    }

    const handleCheckboxChange = (id: string) => {
        console.log(id);
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
                {showAll && todos.map((todo: any) => {

                    if(todo.checked) {
                        return (
                            <span style={{display: "flex", alignItems: "center"}} key={todo.id}>
                        <FormControlLabel style={{wordWrap: "break-word"}}
                                          control={<Checkbox defaultChecked = {true} onChange={() => handleCheckboxChange(todo.id)}/>}
                                          label={todo.name}/>
                        <CloseIcon onClick={() => handleDelete(todo.id)}/>
                        </span>
                        )
                    }

                    return (
                        <span style={{display: "flex", alignItems: "center"}} key={todo.id}>
                        <FormControlLabel style={{wordWrap: "break-word"}}
                                          control={<Checkbox onChange={() => handleCheckboxChange(todo.id)}/>}
                                          label={todo.name}/>
                        <CloseIcon onClick={() => handleDelete(todo.id)}/>
                        </span>
                    )
                })}

                {/* eslint-disable-next-line array-callback-return */}
                {showCompleted && todos.map((todo: any) => {
                    if (todo.checked) {
                    return (
                        <span style={{display: "flex", alignItems: "center"}} key={todo.id}>
                        <FormControlLabel style={{wordWrap: "break-word"}}
                                          control={<Checkbox defaultChecked = {true} onChange={() => handleCheckboxChange(todo.id)}/>}
                                          label={todo.name}/>
                        <CloseIcon onClick={() => handleDelete(todo.id)}/>
                        </span>
                    )}

                })}

                {/* eslint-disable-next-line array-callback-return */}
                {showIncomplete && todos.map((todo: any) => {
                    if(!todo.checked) {
                        return (
                            <span style={{display: "flex", alignItems: "center"}} key={todo.id}>
                        <FormControlLabel style={{wordWrap: "break-word"}}
                                          control={<Checkbox onChange={() => handleCheckboxChange(todo.id)}/>}
                                          label={todo.name}/>
                        <CloseIcon onClick={() => handleDelete(todo.id)}/>
                        </span>
                        )
                    }
                })}
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