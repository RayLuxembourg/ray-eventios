import {post} from "axios";
export default (baseUrl) =>({
    login(user){
        return post(`${baseUrl}/auth/native`,user);
    },
    newUser(user){
        return post(`${baseUrl}/users`,user);
    }
})