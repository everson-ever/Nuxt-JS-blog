<template>
   
    <div>

     
        <main>
            <div class="box"></div>
            <h1 id="teste">Olá, meu nome é <span class="text-red">Everson Silva</span> e eu sou <span class="text-red">Desenvolvedor Web!</span></h1>

            <h2>Aqui você pode saber mais <span class="text-red">sobre mim</span> e sobre <span class="text-red">como trabalho</span>, dar uma olhada em minha <span class="text-red" >experiência</span> e <span class="text-red">habilidades</span> ou entrar em <span class="text-red">contato</span> para novos jobs.</h2>

            <br>
    
            <custom-title>Sobre mim</custom-title>
    
            <p>Moro em Recife mas atendo clientes do mundo todo. Sou conhecido por fazer produtos de qualidade, durabilidade e que agregam valor para meus clientes.</p>
    
            <p>Trabalho usando a web como plataforma, ou seja, respiro HTML5, CSS3 e JavaScript (ou melhor: ECMASCript). Crio sites para todos, seguindo as principais diretivas de acessibilidade, responsividade e web semântica, sem descuidar da qualidade de código.</p>
    
            <custom-title>Como trabalho</custom-title>
    
            <p>Satisfazer meus clientes é prioridade. Para isso, garanto um processo de desenvolvimento altamente interativo, baseado em feedback contínuo. Não trabalho com escopo fechado: o cliente é que decide quando o produto está pronto.</p>
    
            <p>Também não trabalho com prazos fechados: qualidade é importante demais para ser sacrificada.</p>
    
            <custom-title>Experiência</custom-title>
    
            <p>Já desenvolvi projetos para grandes empresas como <a href="http://www.bmw.com" target="_blank">BMW</a>, <a href="http://www.uol.com.br" target="_blank">UOL</a> e <a href="http://www.google.com" target="_blank">Google</a>. Neles, o foco principal era entregar uma experiência imersiva e impactante para o usuário final sem descuidar do desempenho e da acessibilidade da página.</p>
    
            <p>Também já fui contratado para transformar grandes portais, como Terra e G1, em páginas responsivas. Fui responsável por renovar o layout, reorganizar o conteúdo e re-escrever o código de forma mais reaproveitável.</p>
    
            <custom-title>Habilidades</custom-title>
    
            <ul class="skills">
                <li style="width: 80%">Photoshop | Sketch</li>
                <li style="width: 95%">HTML5</li>
                <li style="width: 90%">CSS3</li>
                <li style="width: 90%">JavaScript | Jquery</li>
                <li style="width: 70%">AngularJS | VueJS | React</li>
                <li style="width: 90%">PHP</li>
                <li style="width: 75%">Wordpress</li>
                <li style="width: 50%">NodeJS</li>
                <li style="width: 40%">Python | Ruby...</li>
            </ul>

        </main>
        
        
    </div>
     
 
</template>

<script>
// importa e declara que quer usar o componente
import customTitle from '~/components/customTitle'
export default {
    layout: 'page',
    components: {customTitle}
  
}
</script>

<style>


</style>
