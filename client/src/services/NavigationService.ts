import { NavigationActions } from 'react-navigation';

class NavigationService {
  private navigator: any;
  private static instance: NavigationService;

  private constructor() {}

  static getInstance(): NavigationService {
    if (!NavigationService.instance) {
      NavigationService.instance = new NavigationService();
    }
    return NavigationService.instance;
  }

  pop() {
    this.navigator.dispatch(NavigationActions.back());
  }

  push(routeName: string, params = {}) {
    this.navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  setRefNavigator(navigator: any) {
    this.navigator = navigator;
  }
}

export default NavigationService.getInstance();
