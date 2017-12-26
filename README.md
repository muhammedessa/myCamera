بعد التحديثات الاخيرة ل فايريبز النسخة الخامسة قد تظهر مشكلة في حالة ظهور مشكلة ممكن اتباع الخطوات التالية : 


Step 1: Uninstall with the following command

npm uninstall --save firebase
Step 2: Now, open your package.json file. There, you will find:

"angularfire2": "^5.0.0-rc.4"
Step 3: Below this line, add a this line (without the Caret(^) symbol): and save

"firebase": "4.8.0"













This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

