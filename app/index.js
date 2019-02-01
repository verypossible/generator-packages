const Generator = require('yeoman-generator');

class App extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    const author = this.user.git.name();

    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'namespace',
        message: 'Your namespace for using packages',
        default: (answers) => `@${answers.projectName}`,
        store: true,
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author to be listed in package.json',
        default: author,
      },
      {
        type: 'boolean',
        name: 'circleci',
        message: 'Do you want circleci integration for unit tests?',
        default: true,
      },
    ]).then((answers) => {
      this.log('project name', answers.projectName);
      this.options.projectName = answers.projectName;
      this.log('namespace', answers.namespace);
      this.options.namespace = answers.namespace;
      this.log('author', answers.author);
      this.options.author = answers.author;
      this.log('circleci', answers.circleci);
      this.options.circleci = answers.circleci;
    });
  }

  writing() {
    const vars = {
      projectName: this.options.projectName,
      namespace: this.options.namespace,
      author: this.options.author,
      circleci: this.options.circleci,
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
      'packages/web-app/packages.ts',
      'packages/web-app/store.ts',
      'packages/types/index.ts',
      'packages/web-app/app.tsx',
      'packages/web-app/app.test.tsx',
      'packages/web-app/index.tsx',
      'packages/bootup/index.ts',
    ];

    if (this.options.circleci) {
      files.push('.circleci/config.yml');
    }

    files.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        vars,
      );
    });

    const pkgJson = {
      dependencies: {},
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    this.yarnInstall();
  }
}

module.exports = App;
