import { shallowMount } from '@vue/test-utils';
import Repository from '@/components/Repository.vue';

import repos from '../fixtures/repos';

describe('Repository.vue', () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(Repository, { propsData: props });

    return {
      wrapper,
      name: () => wrapper.find('.name'),
      starsCount: () => wrapper.find('.stars'),
    };
  };

  beforeEach(() => {
    props = {
      repository: repos[0],
    };
  });

  test('component is a Vue instance', () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('name of the profile props was biding and rendered in the component', () => {
    const { name } = build();
    expect(name().exists()).toBe(true);
    expect(name().text()).toBe(props.repository.name);
  });

  test('stars of the profile props was biding and rendered in the component', () => {
    const { starsCount } = build();
    expect(starsCount().exists()).toBe(true);
    expect(starsCount().text()).toBe(String(props.repository.stargazers_count));
  });
});
