import api from "./axios";

export const LoginUser=(data)=>api.post('token/',data);
export const RegisterUser=(data)=>api.post('accounts/register/',data);
export const LogOut=()=>{
    localStorage.clear();
    window.location.replace('/');
};
export const GetProfile=()=>api.get('accounts/profile/');
export const UpdateProfile = (data) =>api.put('accounts/profile/update/', data)
export const UserProfile=(id)=>api.get(`accounts/profile/${id}`)


