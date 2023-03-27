import axios from 'axios';

const token = process.env.TOKEN;
const loginApiUrl = 'http://localhost:1337/api/auth/login';
const signupApiUrl = 'http://localhost:1337/api/auth/signup';

const login = async (email: any, password: any) => {

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    const requestBody = {
        email: email,
        password: password
    };

    try {
        const resp:any = await axios.post(loginApiUrl, requestBody, config);
        return resp.data.token;
    } catch
        (error: any) {
        console.error(error.toString());
    }
}

const register = async (name: any, email: any, password: any) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    const requestBody = {
        name: name,
        email: email,
        password: password
    };

    try {
        const resp:any = await axios.post(signupApiUrl, requestBody, config)
        console.log(resp);
        return resp.data.message;
    } catch
        (error: any) {
        console.error(error.toString());
    }
}

export {
    login,
    register,
}