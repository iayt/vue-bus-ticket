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

        <div class="jumbotron text-center">
          <div class="container">
            <h1 class="display-3">Vue Turizm</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <form v-on:submit.prevent="searchForm">
              <div class="row justify-content-md-center searchArea">
                  <div class="col col-lg-3">
                    <select class="form-control" name="frstStation" v-model="paramForm.from">
                      <option v-for="cities in $store.state.cities" key="cities.id" :value="cities.id">{{cities.name}}</option>
                    </select>
                  </div>
                  <div class="col col-lg-3">
                    <select class="form-control" name="lastStation" v-model="paramForm.to">
                      <option v-for="cities in $store.state.cities" key="cities.id" :value="cities.id">{{cities.name}}</option>
                    </select>
                  </div>
                  <div class="col col-lg-3">
                    <input class="form-control" type="text" name="date" value="01.09.2017" v-model="paramForm.date">
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
              <div class="curtain"></div>

              <h5>Koltuk Seçimi</h5>
              <hr>
              <div class="seatArea 2plus2">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div>31</div>
                <div>32</div>
                <div>33</div>
                <div>34</div>
                <div>35</div>
                <div>36</div>
                <div>37</div>
                <div>38</div>
                <div>39</div>
                <div>40</div>
                <div>41</div>
                <div>42</div>
                <div>43</div>
                <div>44</div>
                <div>45</div>
                <div>46</div>
                <div>47</div>
                <div>48</div>
                <div>49</div>
                <div>50</div>
                <div>51</div>
                <div>52</div>
                <div>53</div>
                <div>54</div>
                <div>55</div>
                <div>56</div>
                <div>57</div>
                <div>58</div>
                <div>59</div>
                <div>60</div>
              </div>
            </div>
            <div class="col col-lg-4 infoArea disabledArea">
              <div class="curtain"></div>

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
