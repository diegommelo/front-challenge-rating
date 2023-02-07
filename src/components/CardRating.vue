<script setup>
import { useRatingsStore } from '../stores/ratings';
import RatingItem from './RatingItem.vue';
import IconStar from './icons/IconStar.vue';

const ratingsStore = useRatingsStore()
const ratings = ratingsStore.ratings

</script>

<template>
    <section>
        <div class="c-Star mb-1">
            <IconStar />
        </div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve
            our
            ofering!</p>
        <div class="c-RatingItems mt-1">
            <RatingItem v-for="(rating, index) in ratings" :key="index" :rating="rating" :index="index"
                :class="{ 'c-RatingItems-Selected ': rating === ratingsStore.selectedRating }"
                @click="ratingsStore.setRating(index)" />
        </div>
        <button class="primary mt-2" @click="$emit('submitRating')">Submit</button>
    </section>
</template>

<style scoped>
.c-RatingItems {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.c-RatingItems-Selected {
    background-color: var(--vt-c-gray);
    color: #fff;
}

.c-Star {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    min-height: 2.5rem;
    background-color: var(--vt-c-dark-blue-2);
    border-radius: 50%;
}
</style>