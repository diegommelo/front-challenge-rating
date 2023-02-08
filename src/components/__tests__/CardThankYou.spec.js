import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useRatingsStore } from '../../stores/ratings'
import CardThanYou from '../CardThankYou.vue'

describe('CardThankYou', () => {
    it('should render the IconThankYou component', () => {
        const wrapper = mount(CardThanYou, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                    }),
                ]
            }
        })
        expect(wrapper.find('.c-IconThankYou').exists()).toBe(true)
    })
    it('should render the selected rating tag', () => { 
        const ratingsStore = useRatingsStore()
        const lastRating = ratingsStore.ratings[ratingsStore.ratings.length - 1]
        ratingsStore.setRating(0)

        const wrapper = mount(CardThanYou, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        stubActions: false
                    }),
                ]
            }
        })
        expect(wrapper.find('.tag').exists()).toBe(true)
        expect(wrapper.find('.tag').text()).toBe(`You selected ${ratingsStore.selectedRating} out of ${lastRating}`)        
    })
    it('should render the "Thank you!" element', () => {
        const wrapper = mount(CardThanYou, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                    }),
                ]
            }
        })
        const h2 = wrapper.find('h2')
        const h2Text = h2.text()
        expect(h2.exists()).toBe(true)
        expect(h2Text).toBe('Thank you!')
    })
    it('should render the paragraph element', () => { 
        const wrapper = mount(CardThanYou, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                    }),
                ]
            }
        })
        const p = wrapper.find('p')
        const pText = p.text()
        expect(p.exists()).toBe(true)
        expect(pText).toBe("We appreciate you talking the time to give a rating. If you ever need more support, don't hesitate to get in touch!")
    })
})