import React from "react";
import {Grid, Layout} from '@metro-ui/core';
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