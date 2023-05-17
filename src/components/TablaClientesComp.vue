<template>
    <div class="row content d-flex justify-content-center ">
    <div class="col-md-10 col-sm-12 ">
    <table class="table  table-success table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Cedula</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Estado</th>
      <th scope="col">Direccion</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="cliente in Clientes" :key="cliente.id">
      <td>{{ cliente.id}}</td>
      <td>{{ cliente.tipDoc +'-'+cliente.numDoc }}</td>
      <td>{{ cliente.nombreCompleto }}</td>
      <td>{{ cliente.email}}</td>
      <td>{{ cliente.estado}}</td>
      <td>{{ cliente.direccion}}</td>
      <td>{{ cliente.password}}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
let url='http://localhost:3000/api/clientes/';
export default{
    data(){
        return{
            Clientes:[],
        }

    },
       created(){               
            this.mostrar()
       },
    methods:{
        mostrar:function(){
              this.axios.get(url)
              .then(response =>{
                this.Clientes = response.data;                   
              })
            },
    }

}

</script>