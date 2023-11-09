import { computed, type Ref } from 'vue';

export function useHeaderButton(isSignedIn: Ref) {
  const buttonText = computed(() => {
    return isSignedIn.value ? 'Logout' : 'Signin';
  });

  const buttonColor = computed(() => {
    return isSignedIn.value ? 'ghost' : 'primary';
  });
  return {
    buttonText,
    buttonColor,
  };
}

export function useShowIcons(route: Ref) {
  const showIconLeftArrow = computed(() => {
    return route.value.name !== 'select' && route.value.name !== 'signin';
  });

  const showIconCalender = computed(() => {
    return (
      route.value.name !== 'signin' &&
      route.value.name !== 'calenderMonth' &&
      route.value.name !== 'exercise'
    );
  });

  const showIconCalenderSearch = computed(() => {
    return route.value.name === 'exercise';
  });

  const showIconHome = computed(() => {
    return route.value.name !== 'signin' && route.value.name !== 'select';
  });

  return {
    showIconLeftArrow,
    showIconCalender,
    showIconCalenderSearch,
    showIconHome,
  };
}
