<script setup>
defineProps({
    rating: {
        type: Number,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <button @click="$emit('setRating', index)">{{ rating }}</button>
</template>

<style scoped>
button {
    background-color: var(--vt-c-dark-blue-2);
    border-radius: 50%;
    border: 1px solid var(--vt-c-dark-blue-2);
    min-width: 2.8rem;
    min-height: 2.8rem;
    color: var(--vt-c-darker-gray);
    font-weight: bold;
    font-size: var(--font-size-md);
}
button:hover {
    background-color: var(--color-primary);
    color: var(--vt-c-white);
    cursor: pointer;
    transition: .35s;
}
</style>