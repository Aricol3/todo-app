import React, {useState, useEffect} from "react";
import {TextField, Checkbox, FormControlLabel} from "@mui/material";
import styles from "./TodoCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import {ButtonGroup, Button} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import {useSelector} from "react-redux";
import {getTodos, addTodo, deleteTodo, complementTodo} from "../api/todo";

function TodoCard() {
    const JWT = useSelector((state: any) => state.auth.JWT);

    // ??????????????????????????????????????????????????????????? De ce output-ul e dublu
    // const [todos, setTodos]: any = useState([]);
    // useEffect(() => {
    //     const getTodosFromDB = async () => {
    //         const resp = await getTodos(JWT);
    //         resp.forEach((todo:any)=> {
    //             setTodos((todos: any) => [...todos, {"name": todo.title, "id": todo.id, "checked": todo.completed}]);
    //         })
    //     }
    //     getTodosFromDB().then(r => null);
    // },[]);
    // ??????????????????????????????????????????????????????????? Dar asa e bine
    const [todos, setTodos] = useState<any[]>([]);
    useEffect(() => {
        const getTodosFromDB = async () => {
            const resp = await getTodos(JWT);
            const todos = resp.reverse().map((todo: any) => ({
                name: todo.title,
                id: todo.id,
                checked: todo.completed
            }));
            setTodos(todos);
        };
        getTodosFromDB().then(r => null);
    }, []);

    function handleDelete(id: any) {
        deleteTodo(JWT, id);
        const newArray = todos.filter((todo: any) => todo.id !== id);
        setTodos(newArray);
    }

    const handleCheckboxChange = (id: any) => {
        complementTodo(JWT, id);
        todos.forEach((todo: any) => {
            if (todo.id === id) {
                todo.checked = !todo.checked;
            }
        })
    };

    async function keyPress(e: any) {
        if (e.keyCode === 13) {
            const res: any = await addTodo(JWT, e.target.value);
            setTodos((todos: any) => [...todos, {"name": e.target.value, "id": res.id, "checked": false}]);
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
                <h2>Todos</h2>
                <TextField style={{marginBottom: '10px'}} id="add-task" label="Add new task" variant="standard"
                           onKeyDown={keyPress}/>

                {todos.filter((todo: any) => filters.status === 'all' || (filters.status === 'completed' ? todo.checked : !todo.checked)).map((todo: any) => {
                    return (
                        <span style={{display: "flex", alignItems: "center"}} key={todo.id}>
                            <FormControlLabel
                            style={{wordWrap: "break-word"}}
                            control={<Checkbox defaultChecked={todo.checked}
                                               onChange={() => handleCheckboxChange(todo.id)}/>}
                            label={todo.name}
                            />
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
                            variant={filters.status === "all" ? "contained" : "outlined"}>All</Button>
                    <Button onClick={handleShowCompleted}
                            variant={filters.status === "completed" ? "contained" : "outlined"}>Completed</Button>
                    <Button onClick={handleShowIncomplete}
                            variant={filters.status === "incomplete" ? "contained" : "outlined"}>Incomplete</Button>
                </ButtonGroup>

            </div>
        </>
    );

}

export default TodoCard;