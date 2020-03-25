import { shallowMount } from '@vue/test-utils';
import Find from '@/views/Find.vue';

describe('Find.vue', () => {
  let wrapper;

  const setData = (wrap) => wrap.setData({ username: 'jcolscript' });
  const resetData = (wrap) => wrap.setData({ username: '' });

  beforeEach(() => {
    wrapper = shallowMount(Find);
  });

  test('component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('username fild must be empty initially', () => {
    resetData(wrapper);
    expect(wrapper.vm.username).toBe('');
  });

  test('username field must be invalid initially', () => {
    resetData(wrapper);
    expect(wrapper.vm.isValid).toBeFalsy();
  });

  test('username field must be valid', () => {
    setData(wrapper);
    expect(wrapper.vm.isValid).toBeTruthy();
  });

  it('calls getUser when click on find', () => {
    const handleClickMock = jest.fn();
    wrapper.setData({
      username: 'jcolscript',
      loading: false,
    });
    wrapper.setMethods({
      fetchUser: handleClickMock,
    });
    wrapper.find('.btn').trigger('click');
    expect(handleClickMock).toHaveBeenCalled();
  });
});
