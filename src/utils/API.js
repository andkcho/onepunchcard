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
    },
    userInfo: function(){
        return axios.get("/userInfo");
    },
    checkLogIn: function(){
        return axios.get("/checkLogIn");
    },
    logout: function(){
        return axios.get("/logout");
    },
    submitCode: function(code){
        return axios.post("/submitcode", code)
    },
    createmerchant: function(merchant){
        return axios.post("/createmerchant", merchant)
    },
    updateStamp: function(newArray){
        return axios.post("/updateStamp", newArray)
    }
}