<template>
    <main>
        <div class="blog-item">
            <div class="wrap">
                <h2>{{ title }}</h2>
                <img :src="image" alt="">
                <p v-html="body"></p>
                
            </div>  
        </div>  
    </main> 
</template>

<script>
export default {
    layout: 'page',
  data(){
      return {
          url: null,
          title: null,
          image: null,
          body: null
          
      }
  },

  created(){
      this.url = this.$route.params.id
      this.show()
  },

  methods: {
      async show() {
          try{
            const res = await this.$axios.get("blogs/" + this.url);
            this.title = res.data.title
            this.image = res.data.image
            this.body = res.data.body
          }
          catch(error){
            console.log(error);
          }
      },

  }
}
</script>

<style>
    .blog-item{
        width: 70%;
        margin: 0 auto;
    }

    .blog-item .wrap{
        background: #fff;
        border: 1px solid #000;
        border-radius: 3px;
        padding: 16px;
        margin: 16px;
    }
    .blog-item img{
        width: 100%;
    }

    .blog-item .read{
        border: 1px solid #4e0303;
        border-radius: 3px;
        padding: 5px;
    }
</style>


