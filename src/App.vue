<template>
    <div id="app">
        <HelloWorld msg="Mmmm småkager"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        }
    }
</script>

<style lang="scss">
    @import 'assets/scss/style';
</style>
