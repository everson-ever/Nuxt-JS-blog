<template>
    <div>
       
       <!-- Navegação -->
       <nav-bar/>

        <!-- Conteúdo da página raiz que importa o layout-->
        <nuxt/>


        <my-footer/>
        <!-- Rodapé -->


    </div>
</template>

<script>
import navBar from '~/components/navBar'
import myFooter from '~/components/myFooter'
export default {
    components: {navBar, myFooter}
}
</script>

