import React from "react";
import TodoCard from "./TodoCard";
import styles from "./TodoScreen.module.css";

function TodoScreen() {
    return (
        <>
            <div className={styles.cardsContainer}>
                <TodoCard/>
            </div>
        </>
    );
}

export default TodoScreen;