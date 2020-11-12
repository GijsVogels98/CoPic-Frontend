import axios from "axios";

const USER_API_BASE_URL = "https://copic-heroku-backend.herokuapp.com/api/users/api/users";

class UserService{


    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
}

export default new UserService()