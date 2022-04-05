import { http } from "../utils/axios"

export const RegisterApi = (body) => http.post('/register', body)
export const LoginApi = (body) => http.post('/login', body)
export const GetAccountProfile = (body) => http.post('/getProfile', body)