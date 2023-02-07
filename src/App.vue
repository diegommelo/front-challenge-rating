<script setup>
import { ref, computed } from 'vue';
import { useRatingsStore } from './stores/ratings';
import CardRating from './components/CardRating.vue';
import CardThankYou from './components/CardThankYou.vue';

const ratingsStore = useRatingsStore()
const selectedRating = computed(() => ratingsStore.selectedRating)

const submit = ref(false)
const answered = computed(() => selectedRating.value > 0 && submit.value)

const submitRating = () => {
  if (selectedRating.value === 0) return
  submit.value = true
}

</script>

<template>
  <main>
    <CardRating v-if="!answered" :selected-rating="selectedRating" @submit-rating="submitRating" class="c-Card" />
    <CardThankYou v-else :selected-rating="selectedRating" class="c-Card" />
  </main>
</template>

<style scoped>
.c-Card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  height: 22rem;
  max-width: 21rem;
  background-color: var(--color-background-element);
  border-radius: 25px;
}

.c-Card /deep/ p {
  font-size: var(--font-size-sm);
  color: var(--vt-c-gray);
  margin: 0.5rem 0;
}
</style>
