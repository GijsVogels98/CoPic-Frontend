import axios from "axios";

const API_URL = "https://copic-media-service.herokuapp.com/media/";

class FireService{

    delete(id){

        let axiosService=axios.create({
                headers: {
                    id: id
                }
            }
        );
        return axiosService.post(API_URL + "delete");
    }
}

export default new FireService;