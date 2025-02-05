<script>
import Menu from './components/Menu.vue';

export default {
    name: 'TicketList',
    components: {
        Menu,
    }
};
</script>

<template>
    <div class="container">
        <Menu/>
    </div>
</template>

<style>
.container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}

</style>
