import services from './services';

const state = {
  cities: [],
  buses: [],
  busservices: {},
  showbusservices: [],
}
const getters = {}
const mutations = {
  setCities(state, cities){
    state.cities = cities;
  },

  setBuses(state, buses){
    state.buses = buses;
  },

  setBusServices(state, busservices){
    for(let i in busservices){
      busservices[i].bustype = state.buses[i].seattype;
      busservices[i].model = state.buses[i].model;
      busservices[i].seat = state.buses[i].seat;
      if(busservices[i].full == false && busservices[i].fullseat.length == state.buses[i].seat){
        busservices[i].full = true;
      }
    }
    state.busservices = busservices;
  },

  setShowBusServices(state, id){
    state.busservices.find(function (data){
      if(data.id === id){
          state.showbusservices = data;
      }
    })
  },

}
const actions = {
  fetchCities(context){
    return services.fetchCities().then((res) => {
      //status 200 kontrolü
      context.commit('setCities',res.data);  //context.commit() mutation için
    });
  },

  fetchBuses(context){
    return services.fetchBuses().then((res) => {
      context.commit('setBuses',res.data);
    });
  },

  fetchBusServices(context, paramForm){
    return services.fetchBusServices(paramForm).then((res) => {
      context.commit('setBusServices', res.data);
    });
  },

  fetchShowBusService(context,id){
    context.commit('setShowBusServices', id);
  },

}

export default {
  state,
  getters,
  mutations,
  actions,
}
