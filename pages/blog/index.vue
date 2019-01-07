<template>
    <main>

        <ul class="blog-list">

            <li class="blog-item" v-for="blog of blogs" :key="blog.id"> 
                <div class="wrap">
                    <h2> {{ blog.title }}</h2>
                    <img :src="blog.image" alt="">
                    <p>{{ blog.body }}</p>
                    <a class="read" :href="'/blog/read/' + blog.url">Ler mais</a>
                </div>  
            </li>

            

        </ul>

    </main>
</template>

<script>
export default {
    layout: 'page',
    
    data() {
        return {

            blogs: []
            
            
        }
    },
    created(){
        this.index();
    },
    methods:{
        async index(){
            try{
                const res = await this.$axios.get("blogs");
                this.blogs = res.data;
            }catch(error){
                console.log(error);
            }
        },

    }
}
</script>

<style scoped>
    .blog-list{
        width: 100%;
    }
    .blog-item{
        width: 33%;
        display: inline-block;
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

    p{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>


