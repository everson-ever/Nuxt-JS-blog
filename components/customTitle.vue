<template>
    <h2>
        <slot/>
    </h2>
</template>

<style scoped>
    h2 {
        position: relative;
    }

    h2:after {
        content: '';
        height: 3px;
        width: 50px;
        background-color: #8a0120;
        position: absolute;
        left: 0;
        bottom: -7px;
        border-radius: 3px;
    }
</style>

