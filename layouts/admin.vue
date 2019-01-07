<template>
    <div class="admin">
        <!-- Menu -->
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/admin/blog">Gerenciar blog</nuxt-link>
                </li>
                 <li>
                    <nuxt-link to="/admin/contact">Gerenciar contato</nuxt-link>
                </li>
                 <li>
                    <a id="logout" @click="logout">Logout</a>
                </li>
            </ul>
        </nav>


         <!-- Conteúdo -->
    <main>
        <nuxt/>
    </main>

    </div>

</template>

<script>
export default {
    middleware: 'admin',
    methods: {
        logout() {
            Cookie.remove('jwt');
            this.$router.push('/login');
        }
    }
}
</script>


<style scoped>
    nav{
        background-color: #fff;
        width: 300px;
        height: 100vh;
        position: fixed;
        top: 0;
        border-right: 1px solid #ba01204d;
    }

    li{
        border-bottom: 1px solid #ba01204d;
    }

    #logout{
        cursor: pointer;
    }

    a{
        padding: 20px;
        display: block;
    }
    main{
        margin-left: 300px;
    }
</style>
