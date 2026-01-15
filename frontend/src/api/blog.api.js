import api from "./axios";

export const ListBlogs=()=>api.get('blogs/')
export const DetailBlogView=(id)=>{
    return api.get(`blogs/${id}/`);};
export const AddBlog=(data)=>api.post('blogs/',data)
export const LikeBlog=(id)=>api.post(`blogs/${id}/like/`)
export const UserBlogs=()=>api.get('blogs/user/')
export const DeleteBlog=(id)=>api.delete(`blogs/${id}/`)