# Welcome To The React Native Workshop 
> Presented by [Brandy Bergh](https://twitter.com/msbrandymorgan) and [Josh Pagley](https://twitter.com/jdpagley)

### Requirements for Workshop:

* Homebrew (http://brew.sh/)

* A Github account (https://github.com/)

* Git installed locally (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

* Latest Version of Xcode (https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

After installing homebrew:

* Install Node.js and NPM. Type in terminal: `brew install node`

* Install Watchman. Type in terminal: `brew install watchman`

* Install React Native CLI. Type in terminal: `npm install -g react-native-cli`


Attendies may have to use sudo to install global npm package. If command above fails try typing in terminal: 

`sudo npm install -g react-native-cli`
### Resources
https://github.com/zionlabs/ReactNativeWorkshop/wiki/Resources

### Installing Dependencies 

* Install Homebrew - [Installation Guide](http://brew.sh/)
* Install React Native dependencies - [Installation Guide](https://facebook.github.io/react-native/releases/next/docs/getting-started.html)

### Getting Started

 * **Step 1** - In the terminal navigate to the folder you want the application to be cloned into. Cloning copies the repository on github to your local computer.
 * **Step 2** - Type in terminal `git clone git@github.com:zionlabs/ReactNativeWorkshop.git`
 * **Step 3** - Type in terminal `git checkout step-2`
 * **Step 4** - Type in terminal `npm install`
 * **Step 5** - Type in terminal `react-native run-ios`

### Branch Strategy

Are you falling behind? Don't worry, we have you covered. At each stage of the workshop we have provided checkpoints (branches) with the completed code. When you checkout a branch you will have everything you need for the next stage of the workshop.

What is a branch? A branch is an independent snapshot of the code.

```
git stash
git checkout <branch-name>
```

**Branches:**

* **step-2** - Routing
* **step-3** - Containers, Components & Styles.
* **step-4** - Redux
* **step-5** - Giphy API integration 
* **step-6** - Firebase API integration
* **step-7** - Completed workshop
