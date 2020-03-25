import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Dev from '@/views/Dev.vue';
import Profile from '@/components/Profile.vue';
import Repository from '@/components/Repository.vue';

import userFix from '../fixtures/user';
import reposFix from '../fixtures/repos';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Dev.vue', () => {
  const state = { profile: {}, repositories: [] };
  let actions;
  let store;

  const build = () => {
    actions = {
      getUser: jest.fn(),
      getRepos: jest.fn(),
    };
    state.profile = userFix;
    state.repositories = reposFix;

    store = new Vuex.Store({
      actions,
      state,
    });

    const wrapper = shallowMount(Dev, { store, localVue, stubs: ['router-link'] });

    return {
      wrapper,
      userProfile: () => wrapper.find(Profile),
      userRepos: () => wrapper.find(Repository),
    };
  };

  test('component is a Vue instance', async () => {
    const { wrapper } = build();
    wrapper.setProps({ props: 'foo' });
    await wrapper.vm.$nextTick();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('props username is present in the component', () => {
    const { wrapper } = build();
    wrapper.setProps({ username: 'foo' });
    expect(wrapper.vm.username).toBe('foo');
  });

  test('correct properties are showing up in the component state', () => {
    const { wrapper } = build();
    const expected = ['loading', 'not_found', 'configs', 'profile', 'repositories'];
    const received = Object.keys({ ...wrapper.vm.$data, ...wrapper.vm.$store.state });
    expect(received).toEqual(expected);
  });
});
