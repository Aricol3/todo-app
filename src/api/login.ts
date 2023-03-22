import axios from 'axios';

const token = process.env.TOKEN;
const apiUrl = 'http://localhost:1337/api/auth/login';

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
        const resp:any = await axios.post(apiUrl, requestBody, config)

        console.log(resp.data.token);
        return resp.data.token;
    } catch
        (error: any) {
        console.error(error.toString());
    }


}

export default login;