<template>
<div class="container">
    <SelectType/>
</div>
</template>

<style>
.container {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
}
</style>

<script>
import SelectType from './helper/SelectType.vue';

export default {
    name:'AddTicket',
    components: {
        SelectType,
    }
}
</script>