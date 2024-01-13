import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SectionGrid from './SectionGrid.vue'

describe('SectionGrid.vue', () => {
  it('should display default slot', () => {
    const slotMock = 'Main content'
    const wrapper = shallowMount(SectionGrid, {
      slots: {
        default: slotMock
      }
    })

    expect(wrapper.html()).toContain(slotMock)
  })
})
