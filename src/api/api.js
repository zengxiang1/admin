import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let base = '/shirospring'
//let headers = [{Content-Type:'application/json'}]
axios.interceptors.request.use( config => {
    config.headers['Content-Type'] = 'application/json'
    NProgress.start()
    return config;
  }, error=> {
    return Promise.reject(error);
  });
 
axios.interceptors.response.use(response => {
    NProgress.done()
    return response;
  },error=> {
    // Do something with response error
    return Promise.reject(error);
  });
export const login = params =>{return axios.post(`${base}/loginWeb`,params).then(res => { res.data })}
//角色
export const getRoleList = () => {return axios.get(`${base}/resource/role/listTopRole`).then(res => res.data)}
export const getRoleListByParent = (id) => {return axios.get(`${base}/resource/role/listByParent/${id}`).then(res => res.data)}
export const saveRole = params => {return axios.post(`${base}/resource/role/save`,params).then(res => res.data) }
export const deleteRole = params =>{return axios.post(`${base}/resource/role/delete`, params).then(res => res.data) }

//用户管理
//查询所有用户
export const getUserList = params => {return axios.post(`${base}/resource/user/getAllUser`,params).then(res => res.data)}
//删除用户信息
export const deleteUser = params => {return axios.post(`${base}/resource/user/deleteUserInfo`,params).then(res => res.data)}