import api from "./axios";

export const ListBlogs=()=>api.get('/blogs/')