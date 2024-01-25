import { describe, it, expect } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavbarLink from './NavbarLink.vue'

describe('AppNavbarLink.vue', () => {
  it('should render nav link', async () => {
    const navItemMock = { title: 'home', url: '/' }
    const wrapper = shallowMount(NavbarLink, {
      props: {
        item: navItemMock
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.html()).toContain(navItemMock.title)
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(navItemMock.url)
  })
})
