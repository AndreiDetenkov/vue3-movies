import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CardRate from './CardRate.vue'

describe('CardRate.vue', function () {
  it('should render rate if rate prop not empty', async function () {
    const rateMock = 7.8
    const wrapper = shallowMount(CardRate, {
      props: {
        rate: ''
      }
    })

    expect(wrapper.html()).not.toContain(rateMock)

    await wrapper.setProps({ rate: rateMock })
    expect(wrapper.html()).toContain(rateMock)
  })
})
