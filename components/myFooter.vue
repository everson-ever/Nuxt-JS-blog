<template>
    <footer>
            <p>Everson Silva - Web Developer!</p>
            <img src="/back-top.png" width="30px" id="imgTop">
    </footer>
</template>

<style scoped>
    footer {
    margin: 32px 32px 0 32px;
    padding: 16px;
    color: grey;
    font-weight: 100;
    position: relative;
}

footer img {
    float: right;
    position: fixed;
    bottom: 8px;
    right: 16px;
}

footer p {
    display: inline;
}

footer:before {
    content: '';
    background: #dddddd;
    height: 1px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>

