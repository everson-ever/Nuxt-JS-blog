<template>
    <div class="contact"> 
        <div v-show="alert" class="alert"></div>
        <main>
            <custom-title>Contato</custom-title>
    
            <p>Preencha e envie o formulário abaixo, responderei assim que possível!</p>
    
            <form id="contato" @submit.prevent="send">
                <input type="text" placeholder="Nome e Sobrenome" id="nome" v-model="form.name">
                <input type="text" placeholder="email@empresa.com" id="email" v-model="form.email">
                <input type="text" placeholder="Assunto do e-mail" id="assunto" v-model="form.subject">
                <textarea placeholder="Mensagem" rows="10" id="mensagem" v-model="form.message"></textarea>
                <button  type="submit"> {{ btnText }} </button>
            </form>
            
    
            <ul class="social">
                <li>
                    <!-- Uma barra aponta para o diretório static -->
                    <a href="http://wwww.facebook.com" target="_blank">
                        <img src="/icon-facebook.png" width="30px">
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com" target="_blank">
                        <img src="/icon-instagram.png" width="30px">
                    </a>
                </li>
                <li>
                    <a href="http://www.twitter.com" target="_blank">
                        <img src="/icon-twitter.png" width="30px">
                    </a>
                </li>
            </ul>

        </main>

    </div>
</template>

<script>
import customTitle from '~/components/customTitle'
export default {
    layout: 'page',
    components: {customTitle},
    data() {
        return {
            btnText: "Enviar",
            alert: false,
            form: {
                 name: null,
                 message: null,
                 subject: null,
                 message: null
            }
           
        }
    },

    methods: {

        async send() {
            this.btnText = "Aguarde..."
            try {
                const res = this.$axios.post('smtp', this.form);
                $('.alert').text(this.form.name + ' sua mensagem foi enviada');
                $('.alert').fadeIn();
                setTimeout(function() {
                $('.alert').fadeOut();
                }, 2500);
                this.form.name = null,
                this.form.email = null,
                this.form.subject = null,
                this.form.message = null
            } catch (error) {
                console.log(error)
                alert("Não foi possível enviar a mensagem")
            }
            finally{
                this.btnText = "Enviar"
            }
        }
    }
}
</script>

<style scoped>

    .alert{
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1111;
        padding: 20px;
        border-radius: 3px;
        color: #fff;
        background: green;
    }

</style>


