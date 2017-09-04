<script>
    import TmpHeader from './header.vue';
    import TmpFooter from './footer.vue';
    import servicesList from './servicesList.vue';
    import loading from './loading.vue';

    export default {
        name: 'Home',
        data() {
          return {
            status:'loading',
            paramForm: {from:"34", to:'6', date:'01.09.2017'},
            seating:'',
          }
        },
        components: {
            TmpHeader,
            TmpFooter,
            servicesList,
            loading,
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
              this.status = 1;
            });
          },

          showSeatPage(){
            let seat = this.$store.state.showbusservices.seat;
            let full = this.$store.state.showbusservices.fullseat;

            const seating = [];
            for (var i=0; i<seat; i++) {
              var valFull=false;
              if(full.indexOf(i) >= 0){valFull=true}
              seating.push({id:i,full:valFull});
            }

            this.seating = seating;
          },

        },
        created(){
          this.$store.dispatch('fetchCities').then(() => {
            this.status = 0;
            //this.status = 'error';  //hata alanı da yapılacak.
          });

          this.$store.dispatch('fetchBuses');
        },
    }
</script>


<template>
    <div>
        <loading  v-if="status === 'loading'" />
        <tmp-header />

        <div class="jumbotron text-center">
          <div class="container">
            <h1 class="display-3">Vue Turizm</h1>
            <p>{{status}} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <form v-on:submit.prevent="searchForm">
              <div class="row justify-content-md-center searchArea">
                  <div class="col col-lg-3">
                    <select class="form-control" name="frstStation" v-model="paramForm.from">
                      <option v-for="cities in $store.state.cities" key="cities.id" :value="cities.id">{{cities.name}}</option>
                    </select>
                  </div>
                  <div class="col col-lg-3">
                    <select class="form-control" name="lastStation" v-model="paramForm.to">
                      <option v-for="cities in $store.state.cities" v-if="cities.id != paramForm.from" key="cities.id" :value="cities.id">{{cities.name}}</option>
                    </select>
                  </div>
                  <div class="col col-lg-3">
                    <input class="form-control" type="text" name="date" v-model="paramForm.date">
                  </div>
                  <div class="col col-lg-1">
                    <button type="submit" class="btn btn-primary">ARA &raquo;</button>
                  </div>
              </div>
            </form>

          </div>
        </div>


        <div class="container">
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width:44%">1. Aşama</div>
            <div class="progress-bar bg-danger" role="progressbar" style="width:21%">2. Aşama</div>
            <div class="progress-bar bg-danger" role="progressbar" style="width:35%">3. Aşama</div>
          </div>
        </div>


        <div class="container">
          <div class="row justify-content-between steps">

            <servicesList />

            <div class="col col-lg-2 disabledArea">
              <div class="curtain" v-if="status < 2"></div>

              <h5>Koltuk Seçimi</h5>
              <hr>
              <div class="seatArea 2plus2">
                <!-- <div v-for="seat in seating">{{seat.id+1}}</div> -->
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
            <div class="col col-lg-4 infoArea disabledArea">
              <div class="curtain" v-if="status < 3"></div>

              <h5>Bilgiler</h5>
              <hr>
              <form>

                <div class="form-group">
                  <h6>Yolcu Bilgileri</h6>
                  <input type="text" class="form-control" name="name" placeholder="Adınız">
                  <input type="text" class="form-control" name="mail" placeholder="Mail Adresi">
                  <input type="text" class="form-control" name="phone" placeholder="Cep Telefonu">
                </div>


                <div class="form-group">
                  <h6>Kredi Kartı Bilgileri</h6>
                  <input type="text" class="form-control" name="card_name" placeholder="Adınız">
                  <input type="text" class="form-control" name="card_numb" placeholder="Mail Adresi">
                  <input type="text" class="form-control" name="card_date" placeholder="Cep Telefonu">
                  <input type="text" class="form-control" name="phone" placeholder="Cep Telefonu">
                </div>


                <div>
                  <h6>Ücret Bilgileri</h6>
                  <p>Bilet Ücreti: 80 TL</p>
                </div>

                <div>
                  <button type="submit" class="btn btn-success disabled" disabled>SATIN AL</button>
                </div>
              </form>

            </div>

          </div>
        </div>

        <tmp-footer />
    </div>
</template>
