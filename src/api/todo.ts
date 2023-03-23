import axios from 'axios'

const apiUrl = "http://localhost:1337/api/todos/";

const addTodo = async (JWT: any, text: any) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${JWT}`
        }
    };

    const requestBody = {
        title: text,
        completed: false
    };

    try {
        const resp: any = await axios.post(apiUrl, requestBody, config);
        console.log(resp.data.todo);
        return resp.data.todo;
    } catch
        (error: any) {
        console.error(error.toString());
    }
}

const getTodos = async (JWT: any) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${JWT}`
        }
    };

    const resp: any = await axios.get(apiUrl, config);
    return resp.data.todos;
}

const getTodo = async (JWT: any, id: any) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${JWT}`
        }
    };

    const resp: any = await axios.get(apiUrl + id, config);
    return resp.data.todo;
}

const deleteTodo = async (JWT: any, id: any) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${JWT}`
        }
    };

    const resp: any = await axios.delete(apiUrl + id, config);
    return resp.data.message;
}

const complementTodo = async (JWT: any, id: any) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${JWT}`
        }
    };
    console.log(id)

    const todo = await getTodo(JWT, id);

    const requestBody = {
        completed: !todo.completed
    };

    const resp: any = await axios.put(apiUrl + id, requestBody, config);
    return resp.data.message;
}


export {
    addTodo,
    getTodos,
    getTodo,
    deleteTodo,
    complementTodo,
}