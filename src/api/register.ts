import axios from 'axios';

const token = process.env.TOKEN;
const apiUrl = 'http://localhost:1337/api/auth/signup';

const register = (name: any, email: any, password: any) => {
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

    axios.post(apiUrl, requestBody, config)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });


    //console.log(axios.get(apiUrl + 'name/Merge?', config));

}

export default register;