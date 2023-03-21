import axios from 'axios';

const token = process.env.TOKEN;
const apiUrl = 'http://localhost:1337/api/auth/signup';

const register = () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    const requestBody = {
        name: 'DA Doe',
        email: 'da@example.com',
        password: 'parola'
    };

    axios.post(apiUrl, requestBody, config)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

export default register;