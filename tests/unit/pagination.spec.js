import { shallowMount } from '@vue/test-utils';
import Pagination from '@/components/Pagination.vue';

describe('Pagination.vue', () => {
  let props;

  const build = () => {
    const wrapper = shallowMount(Pagination, { propsData: props });

    return {
      wrapper,
      name: () => wrapper.find('.name'),
      starsCount: () => wrapper.find('.stars'),
    };
  };

  beforeEach(() => {
    props = {
      page: 1,
      repos: 29,
    };
  });

  test('component is a Vue instance', () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('correct properties are showing up in the component state', () => {
    const { wrapper } = build();
    const expected = ['repos', 'page'];
    const received = Object.keys({ ...wrapper.vm.$props });
    expect(received).toEqual(expected);
  });

  test('navigate event is triggered when the navigation method is triggered', () => {
    const { wrapper } = build();
    const event = { preventDefault: () => {} };
    wrapper.vm.navigate(event, 2);
    expect(wrapper.emitted().navigate[0]).toEqual([2]);
  });

  test('generates the page range according to the number of repositories', () => {
    const { wrapper } = build();
    expect(wrapper.vm.pages).toEqual([1, 2]);
  });

  test('renders pages links', () => {
    const { wrapper } = build();
    expect(wrapper.findAll('.pg').length).toBe(2);
  });

  test('was biding in renders pages links', () => {
    const { wrapper } = build();
    expect(wrapper.find('.pg').text()).toBe('1');
  });
});
