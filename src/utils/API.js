import axios from "axios";

export default {
    login: function(user) {
        return axios.post("/login", user)
    },
    signup: function(user) {
        return axios.post("/signup", user)
    },
    updatelocation: function(location) {
        return axios.post("/updatelocation", location)
    }
}