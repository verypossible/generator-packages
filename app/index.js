const Generator = require('yeoman-generator');

class App extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('projectName', { type: String, required: true });
    this.argument('namespace', { type: String, required: true });
    this.log(this.options.projectName);
    this.log(this.options.namespace);
  }

  writing() {
    const vars = {
      projectName: this.options.projectName,
      namespace: this.options.namespace,
      gitUrl: '',
      author: '',
    };

    const files = [
      '.gitignore',
      'index.ts',
      'jest.config.js',
      'Makefile',
      'package.json',
      'prettier.config.js',
      'README.md',
      'tests.js',
      'tsconfig.json',
      'tslint.json',
      'public/index.css',
      'public/index.html',
      'webpack/common.js',
      'webpack/dev.js',
      'webpack/prod.js',
      'packages/web-app/app.ts',
      'packages/react-hyperscript.d.ts',
      'packages/web-app/index.ts',
      'packages/web-app/packages.ts',
      'packages/web-app/store.ts',
      'packages/web-app/types.ts',
    ]

    files.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        vars,
      );
    });
  }
};

module.exports = App;
