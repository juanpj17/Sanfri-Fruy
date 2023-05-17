<template>
    <div>
        <EncabezadoAdmComVue></EncabezadoAdmComVue>
        <CatalogoCompVue :ClienteRegistrado="true"></CatalogoCompVue>
    </div>
</template>

<script>
import CatalogoCompVue from "../components/CatalogoComp.vue";
import EncabezadoAdmComVue from '../components/EncabezadoAdmCom.vue';

export default{
    components:{
        CatalogoCompVue,EncabezadoAdmComVue
    }
}
</script>