# webmake-handlebars

## Require Handlebars template files with [Webmake](https://github.com/medikoo/modules-webmake)

To use this extension, install it aside of Webmake:

    $ npm install webmake-handlebars

If you use global installation of Webmake, then extension also needs to be installed globally:

    $ npm install -g webmake-handlebars

When running Webmake, ask webmake to use it:

    $ webmake --ext=handlebars program.js bundle.js

Same way when Webmake is used programmatically:

    webmake(inputPath, { ext: 'handlebars' }, cb);

webmake-handlebars can be used with any other Webmake extension, e.g.:

    $ webmake --ext=handlebars --ext=otherext program.js bundle.js

Programmatically:

    webmake(inputPath, { ext: ['handlebars', 'otherext'] }, cb);

## How to Use the Bundled Template
First, download the handlebars.runtime.js from https://github.com/wycats/handlebars.js/blob/master/dist/handlebars.runtime.js. Unfortunately the current NPM package does not include the CommonJS compatible version of the runtime. 

Second, make sure the runtime file is included in your page either by using a script tag like so:

    <!-- this will add Handlebars as a global -->
    <script src="js/lib/handlebars.runtime.js"></script>

or bundle it alongside the template like so:

    // this will give you a reference in your module
    var Handlebars = require('../lib/handlebars.runtime');

To add the template to your bundle, just require it as usual and use the runtime to render it:

    var myTemplate = Handlebars.template(require('./path/to/template/mytemplate'));
    var html = myTemplate(); // renders the template and returns the generated HTML