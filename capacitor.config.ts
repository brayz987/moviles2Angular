import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.brayan.curso',
  appName: 'curso',
  webDir: 'dist/curso',
  server: {
    androidScheme: 'https'
  },
  // server: {
  //   url: "http://10.10.100.50:4200",
  //   cleartext: true
  // },
  // loggingBehavior: 'production'
};

export default config;
