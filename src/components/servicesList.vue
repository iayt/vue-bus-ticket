<script>
  export default {

    data() {
     return {

     }
    },
    methods: {
      showBusService(id){
        this.$store.dispatch('fetchShowBusService', id).then(() => {
          this.$parent.status = 2;
          this.$parent.showSeatPage();
        });
      },
    },
  }
</script>

<template>
    <div class="col col-lg-5 servicesList disabledArea">
        <div class="curtain" v-if="this.$parent.status < 1"></div>
        <h5>Sefer Bilgileri</h5>
        <hr>
        <div class="row srvcItem titleArea">
          <div class="col col-lg-1">#</div>
          <div class="col col-lg-2">Kalkış Saati</div>
          <div class="col col-lg-2">Otobüs Tipi</div>
          <div class="col col-lg-2">Liste<br>Fiyatı</div>
          <div class="col col-lg-2">İnternet Fiyatı</div>
          <div class="col align-self-end"></div>
        </div>
        <div v-for="busservice in $store.state.busservices" key="busservice.id" class="row srvcItem border-top-0" >
          <div class="col col-lg-1">{{busservice.id}}</div>
          <div class="col col-lg-2">{{busservice.time}}</div>
          <div class="col col-lg-2">{{busservice.bustype}}</div>
          <div class="col col-lg-2">{{busservice.price}} TL</div>
          <div class="col col-lg-2"><b>{{busservice.price-5}} TL</b></div>
          <div class="col align-self-end" v-if="busservice.full == false">
            <button class="btn btn-sm btn-success" variant="outline-primary" @click="showBusService(busservice.id)">SEÇ &raquo;</button>
          </div>
          <div class="col align-self-end" v-if="busservice.full == true"><span class="badge badge-secondary badge-danger">DOLU</span></div>
        </div>

    </div>
</template>
