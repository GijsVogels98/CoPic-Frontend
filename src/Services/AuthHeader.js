export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken){
        return { Authorization: 'Bearer ' + user.accessToken};//for spring backend
    }
    else {
        return {};
    }
}