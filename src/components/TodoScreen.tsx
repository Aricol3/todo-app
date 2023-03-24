import React from "react";
import TodoCard from "./TodoCard";
import styles from "./TodoScreen.module.css";
import {useDispatch} from 'react-redux'
import {setJWT} from "../redux/authSlice";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

function TodoScreen() {
    const dispatch = useDispatch();

    let JWTString: any;
    JWTString = localStorage.getItem("user");
    if (JWTString) {
        dispatch(setJWT(JWTString));
    }

    async function handleLogout() {
        localStorage.setItem("user", "");
        navigate("/");
        await window.location.reload();
    }

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.cardsContainer}>
                <TodoCard/>
                <Button style={{maxWidth: 200}} variant="outlined" onClick={handleLogout}>Logout</Button>
            </div>
        </>
    );
}

export default TodoScreen;