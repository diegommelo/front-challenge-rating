<script setup>
import { computed } from 'vue';
import { useRatingsStore } from '../stores/ratings';
import IconThankYou from './icons/IconThankYou.vue';

const ratingsStore = useRatingsStore()
const lastRating = computed(() => ratingsStore.ratings.slice(-1)[0])

</script>

<template>
    <section>
        <div class="mt-1 mb-1">
            <IconThankYou />
        </div>
        <div class="mb-1">
            <span class="tag">You selected {{ ratingsStore.selectedRating }} out of {{ lastRating }}</span>
        </div>
        <h2>Thank you!</h2>
        <p>We appreciate you talking the time to give a rating. If you ever need more support, don't hesitate to get
            in touch!</p>
    </section>
</template>

<style scoped>
.tag {
    padding: 0.3rem 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--vt-c-dark-blue-2);
    color: var(--vt-c-orange);
    font-size: var(--font-size-sm);
    vertical-align: bottom;
}

.c-Card {
    text-align: center;
    align-items: center;
}

h2 {
    font-weight: 500;
}
</style>