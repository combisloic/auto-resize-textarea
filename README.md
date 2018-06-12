# Auto resize textarea
The AngularJS directive that allows you to automatically resize your textareas.

## Setup

**Prerequisites :** You need to have previously installed [node](https://nodejs.org) and [git](https://git-scm.com).

### Bower

To install bower globally :

```
npm install -g bower
```

### Install the module

```
bower install auto-resize-textarea  --save
```
The `--save` option allows you to register the module in your `bower.json` file.

### Load the module in your index.html
You have downloaded the module, what you need now is to load the module in your application.
So in *index.html* add a the following line.
```html
<!-- Just after angularJS script -->
<script src="bower_components/auto-resize-textarea/autoResize.js"></script>
<!-- Just before your app module -->
```
**Note :** This script should be loaded **after** after angularJS's script and **before** your own module.

 ### Define dependencies in your module
 Add the dependencies in your *app.js* (file where you've created your angular module) as shown below.

 ```javascript

var app = angular.module('yourModuleName', ['auto-resize-textarea']);
//
// Your app code here.

 ```

 ## Use the module

 In order to use the directive, you have to add the  *auto-resize-textarea* attribute in your html tag :
 ```html
 <textarea name="myTextArea" class="beautiful" auto-resize-textarea></textarea>
 ```

 **Animation**
 No animation is provided by default. You can easily add a class to make a smooth resize.

In your CSS :

 ```css
 .smooth{
   transition : height ease-out 0.4s;
 }
 ```

In your HTML :

 ```html
 <textarea name="myTextArea" class="smooth" auto-resize-textarea></textarea>

 ```
## Contributing
It would make us really happy with anyone willing to help us developing this project! :-)

**How can you contribute ?**

There is several ways you can contribute to this project :
- By improving the documentation.
- By opening issues.
- By correcting bugs in the code.

**How do I contribute ?**
- Fork the repo.
- Create your own branch.
- Make your changes.
- Push your changes to your forked repo.
- Create a pull request on github.

## Authors

[Loïc Combis](https://github.com/combisloic)

## References

AngularJS [documentation](https://angularjs.org).
