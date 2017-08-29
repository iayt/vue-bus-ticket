<script>
    import TmpHeader from './header.vue';
    import TmpFooter from './footer.vue';
    import servicesList from './servicesList.vue';

    export default {
        name: 'Home',
        data() {
          return {
            status:'loading',
            paramForm: {from:"Nereden", to:'Nereye', date:'29.08.2017'},
          }
        },
        components: {
            TmpHeader,
            TmpFooter,
            servicesList,
        },
        methods: {
          searchForm(){
            this.status = 'loading';

            let paramForm = {
              from: this.paramForm.from,
              to:this.paramForm.to,
              date:this.paramForm.date
            }

            this.$store.dispatch('fetchBusServices', paramForm).then(() => {
              this.status = 'pageBusServices';
            });

          }
        },
        created(){
          this.$store.dispatch('fetchCities').then(() => {
            this.status = 'pageSearch';
            //this.status = 'error';  //hata alanı da yapılacak.
          });
        },
    }
</script>


<template>
    <div>
        <tmp-header />

        <div class="container" v-if="status === 'loading'">Yükleniyor...</div>

        <div class="jumbotron" v-if="status === 'pageSearch'">
          <div class="container">
            <h1 class="display-4">Bilet Ara</h1>
            <div class="row ">
                <form class="form-inline col-12" v-on:submit.prevent="searchForm">
                <div class="form-group col-12 justify-content-center">
                    <select class="form-control col-2 mb-2 mr-sm-2" name="frstStation" v-model="paramForm.from">
                        <option v-for="cities in $store.state.cities" key="cities.id" :value="cities.id">{{cities.name}}</option>
                    </select>
                    <select class="form-control col-2 mb-2 mr-sm-2" name="lastStation" v-model="paramForm.to">
                        <option v-for="cities in $store.state.cities" key="cities.id" :value="cities.id">{{cities.name}}</option>
                    </select>
                    <input type="text" name="date" value="04.08.2017" class="form-control col-2 mb-2 mr-sm-2" v-model="paramForm.date">
                </div>
                <div class="form-group col-12 justify-content-center">
                <button type="submit" class="btn btn-primary col-1 mb-2 mr-sm-2">ARA</button>
                </div>
                </form>
            </div>
          </div>
        </div>

        <servicesList v-if="status === 'pageBusServices'" />
        <tmp-footer />
    </div>
</template>
