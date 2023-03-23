import React from "react";
import TodoCard from "./TodoCard";
import styles from "./TodoScreen.module.css";
import {useDispatch} from 'react-redux'
import {setJWT} from "../redux/authSlice";
import {login} from "../api/auth";

function TodoScreen() {
    const dispatch = useDispatch();

    let JWTString: any;
    JWTString = localStorage.getItem("user");
    if (JWTString) {
        dispatch(setJWT(JWTString));
    }

    return (
        <>
            <div className={styles.cardsContainer}>
                <TodoCard/>
            </div>
        </>
    );
}

export default TodoScreen;