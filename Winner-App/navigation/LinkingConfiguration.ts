import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          TabBook: {
            screens: {
              TabBookScreen: 'book',
            },
          },
          TabNetwork: {
            screens: {
              TabNetworkScreen: 'network',
            },
          },
          TabProfile: {
            screens: {
              TabProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
