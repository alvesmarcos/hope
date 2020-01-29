import { Linking, Alert } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Axios from 'axios';

import colors from '~/styles/colors';

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const openLink = async (url: string, cb: any) => {
  try {
    if (!(await urlExists(url))) {
      throw new Error('You could not load this page');
    }
    if (await InAppBrowser.isAvailable()) {
      cb();
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: colors.primary,
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'overFullScreen',
        modalTransitionStyle: 'partialCurl',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: colors.primary,
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
      });
    } else {
      cb();
      Linking.openURL(url);
    }
  } catch (error) {
    Alert.alert('Hope', 'Não foi possível carregar o conteúdo');
  }
};

const urlExists = async (url: string): Promise<boolean> => {
  try {
    const response = await Axios.head(url);
    if (response.status === 200) return true;
    return false;
  } catch (e) {
    return false;
  }
};

export { capitalize, openLink };
