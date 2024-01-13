import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SectionTitle from './SectionTitle.vue'

describe('SectionTitle.vue', () => {
  it('should display title if prop not empty', async () => {
    const titleMock = 'Component prop title'

    const wrapper = shallowMount(SectionTitle, {
      props: {
        title: ''
      }
    })
    expect(wrapper.html()).not.toContain(titleMock)

    await wrapper.setProps({ title: titleMock })
    expect(wrapper.html()).toContain(titleMock)
  })

  it('should display capitalize title', function () {
    const titleMock = 'component title'
    const capitalizeTitleMock = 'Component title'

    const wrapper = shallowMount(SectionTitle, {
      props: {
        title: titleMock
      }
    })
    expect(wrapper.html()).not.toContain(titleMock)
    expect(wrapper.html()).toContain(capitalizeTitleMock)
  })
})
