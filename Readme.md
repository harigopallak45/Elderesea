# Project Name: Elderease

This project is designed to be a cross-platform application. Below are the setup instructions for building the application for both **Web** and **Android**.


## Table of Contents

1. [Web Application Setup](#web-application-setup)
   - [Prerequisites](#prerequisites-for-web)
   - [Installation](#installation-for-web)
   - [Building for Web](#building-for-web)
   - [Development Server](#development-server)
2. [Android Application Setup](#android-application-setup)
   - [Prerequisites](#prerequisites-for-android)
   - [Installation](#installation-for-android)
   - [Building for Android](#building-for-android)
   - [Installing APK on Device](#installing-apk-on-device)
3. [Additional Notes](#additional-notes)
   - [Environment Variables](#environment-variables)
   - [Troubleshooting](#troubleshooting)



## Web Application Setup

This section covers the setup and build process for the **Web Application** version.

### Prerequisites for Web

- **Node.js** (v16.x.x or later)
- **npm** or **yarn** for dependency management

### Installation for Web

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/elderease.git
   cd elderease
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   Or if you're using `yarn`:
   ```bash
   yarn install
   ```

### Building for Web

To build the project for production, use the following command:

```bash
npm run build
```

This will generate the optimized production build in the `dist` folder.

### Development Server

To run a development server for web development, use:

```bash
npm run dev
```

This will start a local development server and your app will be accessible at `http://localhost:3000`.



## Android Application Setup

This section covers the setup and build process for the **Android Application** version.

### Prerequisites for Android

- **Node.js** (v16.x.x or later)
- **Android Studio** (latest version)
- **JDK** (Java Development Kit) installed
- **Android SDK** installed
- **Capacitor** installed globally on your machine
  - Install Capacitor globally:
    ```bash
    npm install -g @capacitor/cli
    ```
  
- **Java 11 or later**: Make sure your environment uses Java 11 for compatibility with Capacitor and Android builds.

### Installation for Android

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/elderease.git
   cd elderease
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Capacitor:
   ```bash
   npx cap add android
   ```

   This will add the Android platform to your project.

4. Initialize Capacitor if you haven’t yet:
   ```bash
   npx cap init
   ```

5. Add Android as a platform:
   ```bash
   npx cap add android
   ```

   This will configure your project for Android development.

### Building for Android

1. **Configure the Release Keystore** (if not done already):
   - Generate a keystore file using the `keytool` command (if you don’t have one):
     ```bash
     keytool -genkeypair -v -keystore your-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias your-key-alias
     ```
   
2. **Configure Android Build**:
   - Add the signing configuration in `android/app/build.gradle` file under `signingConfigs`:
     ```gradle
     signingConfigs {
         release {
             storeFile file('path_to_your_keystore/your-release-key.jks')
             storePassword 'your-keystore-password'
             keyAlias 'your-key-alias'
             keyPassword 'your-key-password'
         }
     }
     ```
     Replace the placeholder values with your actual keystore details.

3. **Build the APK or App Bundle**:
   - In Android Studio:
     - Go to `Build > Build Bundle / APK > Build APK` to generate an APK.
     - Or go to `Build > Build Bundle / APK > Build Bundle (default)` to generate an `.aab` file for the Google Play Store.
   
   Alternatively, you can run:
   ```bash
   npx cap open android
   ```
   This will open your Android project in Android Studio. From there, you can build and generate the APK using the `Build > Build APK` option.

### Installing APK on Device

Once the APK is built, follow these steps:

1. **Enable Developer Mode** and **USB Debugging** on your Android device.
2. **Connect your Android device** to your computer.
3. Install the APK via ADB:
   ```bash
   adb install path_to_your_apk/app-release.apk
   ```



## Additional Notes

### Environment Variables

Make sure to configure your environment variables if required for certain services like Firebase, APIs, etc.

1. Create a `.env` file at the root of your project.
2. Add your environment variables (e.g., `REACT_APP_API_KEY=your_api_key_here`).



## Troubleshooting

- **"Error: Missing appId for new platform"**: This happens if the `capacitor.config.json` file is missing the `appId` property. Ensure that your `capacitor.config.json` looks like this:
  ```json
  {
    "appId": "com.elderease.app",
    "appName": "Elderease",
    "webDir": "dist",
    "bundledWebRuntime": false
  }
  ```
- **Unable to Build APK**: Ensure that you have configured the signingConfigs correctly in `android/app/build.gradle`.
- **Keystore Issues**: Ensure your keystore file exists in the correct directory and the passwords are accurate.

