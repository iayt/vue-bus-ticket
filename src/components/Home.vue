<script>
    import TmpHeader from './header.vue';
    import TmpFooter from './footer.vue';

    export default {
        name: 'Home',
        data() {
            return {}
        },
        components: {
            TmpHeader,
            TmpFooter,
        },
    }
</script>


<template>
    <div>
        <tmp-header />
        
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-4">Bilet Ara</h1>
            <div class="row ">
                <form class="form-inline col-12">
                <div class="form-group col-12 justify-content-center">
                    <select class="form-control col-2 mb-2 mr-sm-2" name="frstStation">
                        <option value="istanbul">istanbul</option>
                    </select>
                    <select class="form-control col-2 mb-2 mr-sm-2" name="lastStation">
                        <option value="ankara">Ankara</option>
                    </select>
                    <input type="text" name="date" value="04.08.2017" class="form-control col-2 mb-2 mr-sm-2 ">

                    
                </div>
                <div class="form-group col-12 justify-content-center">
                <button type="submit" class="btn btn-primary col-1 mb-2 mr-sm-2">ARA</button>
                </div>
                </form>
            </div>
          </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
               </div>
                <div class="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
              </div>

            <hr>
            <tmp-footer />
        </div>
    </div>
</template>