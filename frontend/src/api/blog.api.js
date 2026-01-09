import api from "./axios";

export const ListBlogs=()=>api.get('/blogs/')
export const DetailBlogView=(id)=>{
    return api.get(`blogs/${id}/`);
};