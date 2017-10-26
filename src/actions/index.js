import axios from 'axios';
const FETCH_POSTS = 'fetch_posts';
const FETCH_POST = 'fetch_post';
const CREATE_POST = 'create_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=ryan12345';
function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}
function createPost(values,callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(()=>callback());
    return {
        type: CREATE_POST,
        payload: request
    }
}
function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export {FETCH_POSTS,CREATE_POST,FETCH_POST, fetchPosts, createPost,fetchPost};