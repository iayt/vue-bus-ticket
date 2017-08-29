import axios from 'axios';

// axios config
axios.defaults.timeout = 8000;
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


export default {

  fetchCities(){
    return axios.get('/city');
  },

  fetchBusServices(paramForm){
    return axios.get('/busservice', {
        params: {
          from: paramForm.from,
          to: paramForm.to,
          date: paramForm.date,
        }
      })
  },

}
