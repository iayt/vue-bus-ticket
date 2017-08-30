<template>
    <div class="col col-lg-5 servicesList">
      
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
          <div class="col col-lg-2">{{busservice.type}}</div>
          <div class="col col-lg-2">{{busservice.price}} TL</div>
          <div class="col col-lg-2"><b>{{busservice.price-5}} TL</b></div>
          <div class="col align-self-end"><a href="#"><span class="badge badge-secondary badge-success">SEÇ &raquo;</span></a></div>
        </div>
        <div class="row srvcItem border-top-0">
          <div class="col col-lg-1">5</div>
          <div class="col col-lg-2">19:00</div>
          <div class="col col-lg-2">2+1</div>
          <div class="col col-lg-2">80 TL</div>
          <div class="col col-lg-2"><b>75 TL</b></div>
          <div class="col align-self-end"><span class="badge badge-secondary badge-danger">DOLU</span></div>
        </div>

    </div>
</template>
