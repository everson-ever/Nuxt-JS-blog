<template>
    <div class="contact">
        <h3>E-mail para receber mensagens</h3>
        <form action="" @submit.prevent="update">
            <input type="text" placeholder="E-mail" v-model="receiver">
            <button type="submit"> {{ btnText }}</button>
        </form>
        <p v-show="message">As alterações foram salvas</p>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            message: false,
            btnText: "Salvar alterações",
            receiver: null
        }
    },

    created() {
        this.index()
    },

    methods: {

        async index () {
          try{
            const res = await this.$axios.get("smtp" );
            this.receiver = res.data.receiver
          }
          catch(error){
            console.log(error);
          }
      },

      async update() {
          this.btnText = "Aguarde..."
          try{
            const res = await this.$axios.put("smtp", {
                receiver: this.receiver
            });
            this.message = true
          }
          catch(error){
            console.log(error);
          }
          finally{
              this.btnText = "Salva alterações"
          }
      }

    }

}
</script>
