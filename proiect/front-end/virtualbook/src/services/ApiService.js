import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
axios.defaults.headers.common['jwt-token'] = localStorage.getItem("jwt");

class ApiService {

    addUser(user) {
        return axios.post(API_BASE_URL + "/login", user);
    }

    sendUser(user){
        return axios.post(API_BASE_URL + "/auth",user);
    }

    saveNote(note) {
     return axios.post(API_BASE_URL + "/notes",note);
    }

    fetchNotes() {
     return axios.get(API_BASE_URL + "/notes");
    }

    deleteNote(noteId) {
     return axios.delete(API_BASE_URL + "/notes/" + noteId);
    }

    fetchMaterii() {
       return axios.get(API_BASE_URL + "/subjects");
    }
}

export default new ApiService();