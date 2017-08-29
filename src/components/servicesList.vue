<template>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Seferler</h1>
        <p>Lütfen aşağıdaki serferlerden birini seçiniz.</p>

        <div class="row justify-content-md-center">
          <div class="list-group col-md-6 ">
            <div class="list-group-item list-group-item-action justify-content-between">
              <span class="col-md-1"><b>#</b></span>
              <span class="col-md-2"><b>Kalkış Saati</b></span>
              <span class="col-md-2"><b>Otobüs Tipi</b></span>
              <span class="col-md-2"><b>Liste Fiyatı</b></span>
              <span class="col-md-2"><b>İnternet Fiyatı</b></span>
              <span class="col-md-2"></span>
            </div>
            <a href="#" v-for="busservice in $store.state.busservices" key="busservice.id" class="list-group-item list-group-item-action justify-content-between">
              <span class="col-md-1">{{busservice.id}}</span>
              <span class="col-md-2">{{busservice.time}}</span>
              <span class="col-md-2">{{busservice.type}}</span>
              <span class="col-md-2">{{busservice.price}} TL</span>
              <span class="col-md-2"><b>{{busservice.price-5}} TL</b></span>
              <span class="badge badge-default badge-pill">KOLTUK SEÇ</span>
            </a>
          </div>
        </div>

      </div>
    </div>
</template>
