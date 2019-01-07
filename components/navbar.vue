<template>
     
        <nav>
            <!-- A raiz do template pode ter apenas um filho -->
            <ul>
                <li>
                    <!-- A tag <naxt-li> é própria do nuxt portanto é mais rápida e melhor -->
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                    <nuxt-link to="/contact">Contato</nuxt-link>
                    
                </li>
            </ul>
        </nav>
</template>

<style scoped>


    nav {
    background-color: #8a0120;
    border-bottom: 6px solid #4e0303;
}

nav li {
    display: inline-block;
}

nav a {
    color: #ffffff;
    padding: 18px;
    display: inline-block;
    text-decoration: none;
    position: relative;
}

nav a:after {
    position: absolute;
    content: '';
    width: 1px;
    top: 0;
    right: 0;
    height: 100%;
    background: #4e0303;
}
</style>

