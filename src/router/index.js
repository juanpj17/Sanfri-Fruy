import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IniciarSView from '@/views/IniciarSView.vue'
import RegistroView from '@/views/RegistroView.vue'
import ClientesRegView from '@/views/ClientesRegView.vue'
import ClientesHomeView from '@/views/ClientesHomeView.vue'
import ConsultarPerfilView from '@/views/ConsultarPerfilView.vue'
import AdministradorHomeView from '@/views/AdministradorHomeView.vue'
import CatalogoView from '@/views/CatologoView.vue'
import CatalogoClienteView from '@/views/CatalogoClienteView.vue'
import CrearProductoView from '@/views/CrearProductoView.vue'
import CatalogoAdmView from '@/views/CatalogoAdmView.vue'
import ConsultarAlmacenView from '@/views/ConsultarAlmacenView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/IniciarSView',
    name: 'IniciarSView',
    component: IniciarSView 
  },
  {
    path: '/RegistroView',
    name: 'RegistroView',
    component: RegistroView
  },
  {
    path: '/ClientesRegView',
    name: 'ClientesRegView',
    component: ClientesRegView
  },
  {
    path: '/ClientesHomeView/:email',
    name: 'ClientesHomeView',
    component: ClientesHomeView
  },
  {
    path: '/ConsultarPerfilView/:email',
    name: 'ConsultarPerfilView',
    component: ConsultarPerfilView
  },
  {
    path: '/AdministradorHomeView',
    name: 'AdministradorHomeView',
    component: AdministradorHomeView
  },
  {
    path: '/CatologoView',
    name: 'CatalogoView',
    component: CatalogoView
  },
  {
    path: '/CatalogoClienteView/:email',
    name: 'CatalogoClienteView',
    component: CatalogoClienteView
  },
  {
    path: '/CrearProductoView',
    name: 'CrearProductoView',
    component: CrearProductoView 
  },
  {
    path: '/CatalogoAdmView',
    name: 'CatalogoAdmView',
    component: CatalogoAdmView
  },
  {
    path: '/ConsultarAlmacenView',
    name: 'ConsultarAlmacenView',
    component: ConsultarAlmacenView
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
