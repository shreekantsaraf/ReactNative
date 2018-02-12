React Native

Installation

To use a syntax such as  “react-native start” to run the first react-native app… similar to what we did in react start, there are a lot of steps to be taken.

To run your first React-Native app you need to have a lot of patience
(this tip is mainly for the people coming from Visual Studio Dev environment) 
For react-native development, we need a mobile app emulator on the dev machine. It seems most people use Android Studio. So, I decided to install Android studio first. Here is a cautionary tip… if you come from windows environment, specifically Visual Studio Dev environment, you will find the Android studio environment to be quite different…. And perhaps extremely difficult…. You also may find the errors you get, to be whimsical… This is just my own opinion. May be, once I repeat the similar process of installing the apps that use Java, gradle, npm and yarn, this whole experience may not look like a funny game.  Usually, the open source community is mature,  welcoming and usually, you find solutions to almost any problems you may have, to the last excruciating details on the youtube, or elsewhere.  In this specific in the case, of Android Studio installation and running your first ReactNative app, however, I found the information to be inadequate. It may be perhaps that ReactNative is relatively a new area. 
The good news is, once the Android Studio starts working, it works every time…. It is a great feeling to see your first mobile app running on the simulator… so, have patience and you will reap rewards of being able to create some very cool UI.

Read the below section before to start the installation
To install the android studio, and run your first hello world program first read the cautions below – 
1.	Caution 1 - You would think that installing the latest version of dependent software such as Java, gradle, npm should solve the problem… but React native, it is not so…. E.g.
a.	React Native need NPM 4.X (current I have NPM 5.X on my machine, so I tried to uninstall the NPM5 and install NPM 4, but couldn’t succeed. Finally, I found out that installing yarn could solve the problem, Yarn installation is pretty straight forward, but read below for some short-cuts and cautions)
2.	Caution 2 - Don’t use any other material for installing the Android studio… only use this youtube video https://www.youtube.com/watch?v=mkualZPRZCs. No other place you will find people telling you install yarn and npm tighter. (at least, I didn’t find anywhere)
3.	Caution 3 -  If  you get error – “Could not find com.android.tools.build:gradle:3.0.1” == only Use this video - https://www.youtube.com/watch?v=Xjywi7DTMgw
1.	Java installation - JDK 8 is compatible, and JDK 9 is not compatible. Remove JDK 9 and reinstall JDK8.
2.	Java installation – Use default locations for JDK and JRE. Don’t install it on any other drive. Somehow other locations seems bothersome for troubleshooting the installation issues.
3.	Pathon2 is needed. Don’t use Python 3.
4.	YARN installation seems MUST. NPM 4.0 version is needed for ReactNative (NPM 5.X is current and incompatible. And so it seems NPM can’t be used, so YERN is NEEDED)
5.	To install YARN, first you need to install (https://chocolatey.org ) – To install Chocolaty, use Windows MSI installer. Don’t use any other method, otherwise the installation hangs…
6.	Yarn installation is easy. You can use npm for that.
7.	Amazingly, yarn can run on Powershell. And Powershell worked for me better than cmd line
8.	Once you open the ReactNative app in android studio for the first time, it asks you if you want to upgrade to gradle 3.0.1 plugin. Don’t upgrade to gradle 3.0.1 plugin message when you install android studio. If you upgrade, ReactNative app will keep giving errors.
9.	Don’t use the create-react-native-app. Use react-native init AppName to create the react native app
10.	Environment variable for JAVA_HOME and PATH variable of Android studio needs to be added manually.
11.	When you are in visual studio code, use don’t use npm install commands to install the react-native packages and modules. Use yarn command such as yarn add ‘react-native’
12.	Android studio is good but the initial installation on windows 10 was very challenging. I had to uninstall Java (JDK) multiple times.

Installation steps
1.	Install JDK 8 (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html )
2.	Create and set JAVA_HOME env variable.
3.	If you don’t have node installed, install it. Again NPM 4 is needed. But, it may not in your hand and that’s ok. Install latest version.
4.	Install Python2 (http://www.Python.org  )
5.	(Perhaps this step is not needed, I did it anyway). Go to https://chocolatey.org  and install MSI version of chocolaty.
6.	Open admin Powershell and install yarn using command npm install -g yarn
7.	Download Android Studio and then install it.  Download takes forever. Installation also is time consuming. https://developer.android.com/studio/index.html 
8.	Install react-native-cli using the command on admin command line  - npm install -g react-native-cli
9.	Go to the place where you want to create a react native project and call  - react-native init AppName
10.	In the Android Studio you need to create an emulator device. Use some Nexus 5 that has about 5 inches of diagonal length. 

After you complete ALL the above steps, you are ready for actual running of the Android simulator. Now you will need following three steps
1.	Android emulator window. Open the project you created in the 9the step above (create a react native project). Actually, you point to the android directory under the react-native project.  You start this window from Android studio – Tools-Android-AVD Manager menuitem and then choose the device you created in the step0 above . And it seems once you start the Android emulator (the device), you can close the Android studio.
2.	Go into the project dir using admin Powershell window and run command  react-native run-android. This command will come back. Means, the server will not keep running.
3.	Open Visual Studio Code. On its powershell command line, Run command   react-native start (very similar to react start we did in react web). This seems to start the server and the server will keep running.


Once you complete the above steps and successfully run the hello world program, you can start to learn React-Native

