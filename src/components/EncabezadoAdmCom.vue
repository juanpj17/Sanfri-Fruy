<template>
    <div class="principalCont">
        <b-navbar toggleable="sm"  variant="light">
          <b-navbar-brand href="#">
            <img src="@/assets/LogoProyecto.jpg" class="d-inline-block align-top" alt="Kitten" style="margin-left: 30px;">

            
          </b-navbar-brand>
      
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav >
              <b-nav-item  style="margin-left: 50px; margin-right: 50px; "><b-button variant="light"  v-on:click="Home"><h4>INICIO</h4></b-button></b-nav-item>
              <b-nav-item style="margin-left: 50px; margin-right: 50px; font-size: 30px; color: black;" >
              <h2><b-dropdown class="mx-1 letra" right text="CATALOGO" size="lg" variant="light" ><b-dropdown-item v-on:click="Catalogo">Ver catalogo</b-dropdown-item><b-dropdown-item v-on:click="CrearProducto">Crear producto</b-dropdown-item></b-dropdown></h2></b-nav-item>
              <b-nav-item style="margin-left: 50px; margin-right: 50px; font-size: 30px;"><h2><b-dropdown class="mx-1 letra" right text="AlMACEN" size="lg" variant="light"> <b-dropdown-item v-on:click="ConsultarAlmacen">Ver almacen</b-dropdown-item> </b-dropdown> </h2> </b-nav-item>
              <b-nav-item  style="margin-left: 50px; margin-right: 50px; font-size: 30px;"><h2><b-dropdown class="mx-1 letra" right text="CLIENTES" size="lg" variant="light"> <b-dropdown-item v-on:click="ConsultarCliente">Consultar clientes</b-dropdown-item> </b-dropdown> </h2> </b-nav-item>
              <b-nav-item  style="margin-left: 100px; margin-right: 100px; "><b-button variant="light" ><h4></h4></b-button></b-nav-item>
              <b-nav-item  style="margin-left: 100px; margin-right: 100px; "><b-button variant="light" ><h4></h4></b-button></b-nav-item>
              <b-nav-item  style="margin-left: 100px; margin-right: 100px; "><b-button variant="light"  ><h4></h4></b-button></b-nav-item>
              <b-nav-item  style="margin-left: 80px; margin-right: 90px; "><b-button variant="light"  v-on:click=" CerrarSesion"><h4>Cerrar sesion</h4></b-button></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        
        
        </b-navbar>
        
      </div>
    </template> 
    <script>
export default{
    methods:{
       
        Home(){
          if(this.$route.path!='/AdministradorHomeView')
          {this.$router.push('/AdministradorHomeView');}
        },
        Catalogo(){
        if (this.$route.path!='/CatalogoAdmView')
        {if(this.Productos.length!==0)
          this.$router.push('/CatalogoAdmView');
        else
      this.MensajeError();}
      },
        CrearProducto(){
          if (this.$route.path!='/CrearProductoView')
        {if(this.Productos.length!==0)
          this.$router.push('/CrearProductoView');
        else
          this.MensajeError();}
      },
        ConsultarCliente(){
          if(this.$route.path!='/ClientesRegView')
       {if(this.Clientes.length!==0)
        this.$router.push('/ClientesRegView');
        else
        this.MensajeError();
      }
      },
      ConsultarAlmacen(){
        if(this.$route.path!='/ConsultarAlmacenView')
        {if(this.Productos.length!==0)
          this.$router.push('/ConsultarAlmacenView');
        else
      this.MensajeError();}
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