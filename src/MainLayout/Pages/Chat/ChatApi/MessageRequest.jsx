import axios from "axios";

const Api = axios.create({ baseURL: "https://rentify-server-drab.vercel.app" });

export const getMessages = (id) => Api.get(`/message/${id}`)

export const getUser = (id) => Api.get(`/users/find${id}`)
console.log(getUser);