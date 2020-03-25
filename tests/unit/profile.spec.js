import { shallowMount } from '@vue/test-utils';
import Profile from '@/components/Profile.vue';

import profile from '../fixtures/user';

describe('Profile.vue', () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(Profile, { propsData: props });

    return {
      wrapper,
      avatar: () => wrapper.find('.avatar'),
      login: () => wrapper.find('.login'),
      name: () => wrapper.find('.name'),
      bio: () => wrapper.find('.bio'),
    };
  };

  beforeEach(() => {
    props = {
      profile,
    };
  });

  test('component is a Vue instance', () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('avatar of the profile props was biding and rendered in the component', () => {
    const { avatar } = build();
    expect(avatar().exists()).toBe(true);
    expect(avatar().attributes().src).toBe(props.profile.avatar_url);
  });

  test('login of the profile props was biding and rendered in the component', () => {
    const { login } = build();
    expect(login().exists()).toBe(true);
    expect(login().text()).toBe(props.profile.login);
  });

  test('name of the profile props was biding and rendered in the component', () => {
    const { name } = build();
    expect(name().exists()).toBe(true);
    expect(name().text()).toBe(props.profile.name);
  });

  test('bio of the profile props was biding and rendered in the component', () => {
    const { bio } = build();
    expect(bio().exists()).toBe(true);
    expect(bio().text()).toBe(props.profile.bio);
  });
});
