<template>
    <div :class="[className, 'title', 'width-center']">
        <span class="title-tooltip-text">{{ text }}</span>
        <div v-if="type === 'modal'" class="title-tooltip-pointer"></div>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
        type: String,
    },
    computed: {
        className() {
            return this.type === 'modal' ? 'modal-title-container' : 'card-title-container';
        }
    }
};
</script>

<style scoped>
@import "../../assets/css/TitleTooltip.css";
</style>
