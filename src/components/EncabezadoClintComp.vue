<template>
    <div>
        <b-navbar toggleable=""  variant="light">
          <b-navbar-brand href="#">
            <img src="@/assets/LogoProyecto.jpg" class="d-inline-block align-top" alt="Kitten" style="margin-left: 30px;">
          </b-navbar-brand>
      
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav >
              <b-nav-item  style="margin-left: 50px; margin-right: 50px; "><b-button variant="light" v-on:click="Home"><h4>INICIO</h4></b-button></b-nav-item>
              <b-nav-item style="margin-left: 50px; margin-right: 50px; "><b-button variant="light" v-on:click="Catalogo"><h4>CATALOGO</h4></b-button></b-nav-item>
              <b-nav-item style="margin-left: 50px; margin-right: 50px; "><b-button variant="light"><h4><b-icon icon="cart4"></b-icon> CARRITO</h4></b-button></b-nav-item>
              <b-nav-item  style="margin-left: 90px; margin-right: 90px; font-size: 30px; font-family: Georgia, 'Times New Roman', Times, serif;"><h3 >                                                                             </h3></b-nav-item>
              <b-nav-item  style="margin-left: 90px; margin-right: 90px; font-size: 30px; font-family: Georgia, 'Times New Roman', Times, serif;"><h3 >                                                                             </h3></b-nav-item>
              <b-nav-item  style="margin-left: 90px; margin-right: 90px; font-size: 30px; font-family: Georgia, 'Times New Roman', Times, serif;"><h3 >                                                                             </h3></b-nav-item>
              <b-nav-item  style="margin-left: 90px; margin-right: 90px; font-size: 30px; font-family: Georgia, 'Times New Roman', Times, serif;"><h3 >                                                                             </h3></b-nav-item>
              <b-nav-item  style="margin-left: 30px; margin-right: 30px; font-size: 30px; font-family: Georgia, 'Times New Roman', Times, serif;"><h3 >                                                                             </h3></b-nav-item>
              <b-nav-item  style="margin-left: 40px; margin-right: 40px; font-size: 30px;"><h2><b-dropdown class="mx-1 letra" right text="Perfil" size="lg" variant="light"> <b-dropdown-item  v-on:click="verPerfil"> <b-avatar variant="light"></b-avatar>Ver perfil</b-dropdown-item> </b-dropdown></h2> </b-nav-item>
              <b-nav-item  style="margin-left: 40px; margin-right: 40px; "><b-button variant="light" v-on:click="CerrarSesion"><h4>Cerrar sesion</h4></b-button></b-nav-item>
              
            </b-navbar-nav>
          
          
        </b-collapse>
        
        
        </b-navbar>
        
      </div>
    </template> 

<script>
export default{
    props:{
        Perfil:'',
    },
    methods:{
      verPerfil(){
        if (this.$route.path!='/ConsultarPerfilView/'+this.Perfil)
        {if(this.Clientes.length!==0)
          this.$router.push('/ConsultarPerfilView/'+this.Perfil);
          else
          this.MensajeError();
        }
      },
      Catalogo(){
        if(this.$route.path!='/CatalogoClienteView/'+this.Perfil)
        { if(this.Productos.length!==0)
          this.$router.push('/CatalogoClienteView/'+this.Perfil);
          else
          this.MensajeError();
        }
      },
      Home(){
        if (this.$route.path!='/ClientesHomeView/'+this.Perfil)
        {this.$router.push('/ClientesHomeView/'+this.Perfil);}
      },  
      CerrarSesion(){
        this.$router.push('/')
      },
      ProbarConexionClientes(){
          let url='http://localhost:3000/api/clientes/';
          this.axios.get(url)
              .then(response =>{
              this.Clientes=response.data;                 
              })
        },
        ProbarConexionProductos(){
          let url='http://localhost:3000/api/productos/';
          this.axios.get(url)
              .then(response =>{
              this.Productos=response.data;                   
              })
        },
        MensajeError(){
          Swal.fire({
              icon: 'error',
              title: 'Error de conexion ',
              text: 'Tenemos problemas para conectarnos con el servidor, por favor intentelo mas tarde',})
        },
    },
    data(){
      return{
        Clientes:[],
        Productos:[],
      }
    },
    created(){               
      this.ProbarConexionClientes();
      this.ProbarConexionProductos();
       },
    
    
}
 </script>
 <style  scoped>
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;0,800;1,400&display=swap');
 
 h2{
  font-family: 'Nunito', sans-serif;
 }
 h4{
  font-family: 'Nunito', sans-serif;
 }
 .letra{
  font-size: 40px;
 }
 
</style>