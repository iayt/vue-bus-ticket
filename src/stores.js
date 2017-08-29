import services from './services';

const state = {
  cities: [],
  busservices: {},
}
const getters = {}
const mutations = {
  setCities(state, cities){
    state.cities = cities;
  },

  setBusServices(state, busservices){
    state.busservices = busservices;
  },
}
const actions = {
  fetchCities(context){
    return services.fetchCities().then((res) => {
      //status 200 kontrolü
      context.commit('setCities',res.data);  //context.commit() mutation için
    });
  },

  fetchBusServices(context, paramForm){
    return services.fetchBusServices(paramForm).then((res) => {
      context.commit('setBusServices', res.data);
    });
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
