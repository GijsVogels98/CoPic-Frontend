import axios from "axios";

const API_URL = "http://localhost:8080/security/";


class AuthService{
    login(username, password){
        return axios
            .post(API_URL + "sign-in", {
                username,
                password
            })
            .then(response => {
                if (response.data){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            })
    }
    delete(id){
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const token = currentUser.accessToken;
        console.log(token)
        return axios
            .post(API_URL + "delete/" +id,  {},{
                headers:{
                    "Authorization": "Bearer " + token
                }
            });
    }

    update_password(username, passwordold , passwordnew){
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const token = currentUser.accessToken;
        return axios
            .put(API_URL + "update_password",{
            username,
            passwordold,
            passwordnew
        },{
                headers:{
                    "Authorization": "Bearer " + token
                }
            }).then(response => {
                console.log(response)
                if (response.data){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            })
    }

    update_email(username, passwordold , email){
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const token = currentUser.accessToken;
        return axios
            .put(API_URL + "update_email",{
                username,
                passwordold,
                email
            },{
                headers:{
                    "Authorization": "Bearer " + token
                }
            }).then(response => {
                console.log(response)
                if (response.data){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            })
    }

    logout(){
        localStorage.setItem('user', null);
    }

    register(username, email, password){
        return axios.post(API_URL + "sign-up", {
            username,
            email,
            password
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}


export default new AuthService();