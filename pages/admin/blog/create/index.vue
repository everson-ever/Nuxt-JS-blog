<template>
    <div class="edit">
        <h3>Criar novo Blog</h3>
        <form action="" @submit.prevent="store">
            <input type="text" placeholder="Titulo do blog" v-model="form.title">
            <input type="text" placeholder="Link da imagem" v-model="form.image">
            <textarea rows="5" placeholder="Corpo do blog" v-model="form.body"></textarea>
            <button type="submit">{{ btnText }}</button>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            btnText: "Criar",
            form: {
                title: null,
                image: null,
                body: null
            }
        }
    },

    methods: {
        async store(){
            this.btnText = "Aguarde...";
            try {
                const res = await this.$axios.post('blogs', this.form);
                this.form.title = null,
                this.form.image = null,
                this.form.body = null
            } catch (error) {
                console.log(error);
            }
            finally{
                this.btnText = "Criar";
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


