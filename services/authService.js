import axios from 'axios';

const baseURL = 'http://localhost:3300'; 

const authService = {

    async login(formData) {
        const response = await axios.post(`${baseURL}/finduser`, formData);
  
        if (!response) {
            return {error:true, msg:"Erro ao logar, tente novamente mais tarde!"};   
        }
        return response.data;
      },


      async verifyToken(idUser, token) {
        const response = await axios.get(`${baseURL}/user/${idUser}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response;
      }
    };

export default authService;