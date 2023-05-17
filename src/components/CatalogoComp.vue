<template>
    <div class="contenedor">
        <br>
        <h1>Nuestros productos</h1>
        
    <b-row class="mt-5">
        <b-col cols="12" md="3" v-for="producto in Productos" :key="producto.id">
            <b-card style='z-index: 2; border-radius: 50px ; border-radius: 10% ; $enable-rounded
             box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;' class="mb-5 mx-5 rounded float-right">
            <img :src="producto.nombreImagen" class="card-img-top"  style='z-index:2;box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'>
            <br>
            <br>
            <br>
            <b-card-title><h3>
            {{ producto.nombre }}
        </h3> </b-card-title>
            <h5 class="card-subtitle mb-2 mr-5 text-body-secondary">{{ producto.precio }} Bs</h5>
            <b-card-text>
            <h6>{{ producto.descripcion }}</h6>
            </b-card-text>
            <b-button  v-on:click="alertaNoCliente" variant="primary">Comprar</b-button>
            </b-card>
        </b-col>
      
        
        
    </b-row>
    </div>
  
   
</template>
<script>

export default{
    data(){
        return{
            Productos:'',
        }

    }, created(){               
            this.mostrar()
       },
       methods:{
        mostrar(){
            let url='http://localhost:3000/api/productos/';
            this.axios.get(url)
              .then(response =>{
                this.Productos = response.data;  
                console.log(this.Productos);
                               
              })
              
            },
        alertaNoCliente(){
            if (this.ClienteRegistrado==false)
               { Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puede realizar una compra sin  antes iniciar sesion',
                footer: '<a href="/IniciarSView">Iniciar Sesion</a>'})}
            else
           { Swal.fire('El producto se agrego a su carrito')}
        },
        alertaServidor(){
            Swal.fire('El pservidor no responde')
        }
       },
       props:{
        ClienteRegistrado:'',
       }
    

}
</script>
<style  scoped>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');
 
 h1{
    font-family: 'Libre Baskerville', serif;
 }
 .contenedor{
   background-color:#F4EFEE;
;

 }
 h3{
  font-family: 'Nunito', sans-serif;
 }
 h6{
  font-family: 'Nunito', sans-serif;
 }
 h5{
  font-family: 'Nunito', sans-serif;
 }
</style>