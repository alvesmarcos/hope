import { NavigationActions, StackActions } from 'react-navigation';
import uuid from 'uuid/v4';

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

  push(routeName: string, params = {}, reset = false) {
    const action = NavigationActions.navigate({
      routeName,
      params,
      key: uuid(),
    });
    const resetAction = StackActions.reset({
      index: 0,
      actions: [action],
    });
    this.navigator.dispatch(reset ? resetAction : action);
  }

  setRefNavigator(navigator: any) {
    this.navigator = navigator;
  }
}

export default NavigationService.getInstance();
