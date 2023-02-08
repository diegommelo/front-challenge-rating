import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useRatingsStore } from '../../stores/ratings'
import CardRating from '../CardRating.vue'

describe('CardRating', () => {
    it('should render all the given ratings', () => {
        const wrapper = mount(CardRating, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                    }),
                ]
            },
        })
        const ratingsStore = useRatingsStore()
        const ratings = ratingsStore.ratings

        const ratingElements = wrapper.findAll('.c-RatingItems button')
        expect(ratingElements.length).toBe(ratings.length)
    })

    it('should render the IconStar component', () => { 
        const wrapper = mount(CardRating)
        const iconStar = wrapper.find('.c-Star')
        expect(iconStar.exists()).toBe(true)
    })

    it('should render the "How did we do?" element', () => { 
        const wrapper = mount(CardRating)
        const h2 = wrapper.find('h2')
        const h2Text = h2.text()
        expect(h2.exists()).toBe(true)
        expect(h2Text).toBe('How did we do?')
    })

    it('should render the paragraph element', () => { 
        const wrapper = mount(CardRating)
        const p = wrapper.find('p')
        const pText = p.text()
        expect(p.exists()).toBe(true)
        expect(pText).toBe('Please let us know how we did with your support request. All feedback is appreciated to help us improve our ofering!')
    })

    it('should set the selected rating', () => {
        const wrapper = mount(CardRating, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        stubActions: false
                    }),
                ]
            },
        })
        const ratingsStore = useRatingsStore()
        const ratings = ratingsStore.ratings

        const ratingElements = wrapper.findAll('.c-RatingItems button')
        ratingElements[2].trigger('click')
        expect(ratingsStore.selectedRating).toBe(ratings[2])
    })

    it('should submit the selected rating', () => {
        const wrapper = mount(CardRating, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        stubActions: false
                    }),
                ]
            },
        })
        const ratingsStore = useRatingsStore()
        const ratings = ratingsStore.ratings

        const ratingElements = wrapper.findAll('.c-RatingItems button')
        ratingElements[2].trigger('click')
        const submitButton = wrapper.find('.primary')
        submitButton.trigger('click')
        expect(ratingsStore.selectedRating).toBe(ratings[2])
    })
})
