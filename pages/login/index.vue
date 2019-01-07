<template>
    <div class="login">
        <custom-title>Login</custom-title>
        <p v-show="error">E-mail ou Senha inválidos</p>
        <form action="" @submit.prevent="login"> 
            <input type="text" placeholder="E-mail" v-model="form.email">
            <input type="password" placeholder="senha" v-model="form.password">
            <button type="submit">{{ btnText }}</button>
        </form>
       
    </div>
</template>


<script>
import customTitle from '~/components/customTitle'
export default {
    //Trata das permissoes que um usuário tem
    middleware: 'login',
    components: { customTitle },
    data() {
        return {
            error: false,
            btnText: "Entrar",
            form: {
                email: null,
                password: null
            }
        }
    },
    methods:{
        async login(){
            try {
                this.btnText = "Aguarde...";
                //Fazendo um requisição para a rota da API
                const res = await this.$axios.post("users/login", this.form);
                // Guardando o token no cache do navegador
                Cookie.set("jwt", res.data.token);
                
                this.$router.push('./admin');
            } catch (error) {

                this.error = true;
            }
            finally{
                this.btnText = "Entrar";
            }
        }
    }
}
</script>


<style scoped>

    .login{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

