<template>
    <div class="edit">
        <h3>Editar Blog</h3>
        <form action="" @submit.prevent="update">
            <input type="text" placeholder="Titulo do blog" v-model="form.title">
            <input type="text" placeholder="Link da imagem" v-model="form.image">
            <textarea rows="5" placeholder="Corpo do blog" v-model="form.body"></textarea>
            <button type="submit">{{ btntext }} </button>
        </form>
        <p v-show="message"> {{ message }} </p>
    </div>
</template>

<script>
export default {
    layout: 'admin',

    validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },

  data(){
      return {
          id: null,
          message: null,
          btntext: "Salvar alterações",
          form: {
              title: null,
              image: null,
              body: null
          }
      }
  },

  created(){
      this.id = this.$route.params.id
      this.show()
  },

  methods: {
      async show() {
          try{
            const res = await this.$axios.get("blogs/" + this.id);
            this.form = res.data
          }
          catch(error){
            console.log(error);
          }
      },

      async update() {
          this.btntext = "Aguarde..."
          try{
            const res = await this.$axios.put("blogs/" + this.id, this.form);
            this.message = "As alterações foram salvas"
          }
          catch(error){
            console.log(error);
          }
          finally{
              this.btntext = "Salva alterações"
          }
      }
  }
}
</script>

<style scoped>
    textarea{
        resize: auto;
    }
</style>


