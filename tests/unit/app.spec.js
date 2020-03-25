import { shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view'],
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
