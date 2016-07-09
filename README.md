# cookiecutter-angular2-iodevs

[![npm dependencies](https://david-dm.org/iodevs/cookiecutter-angular2-iodevs.svg?path=%7B%7Bcookiecutter.project_name%7D%7D)](https://david-dm.org/iodevs/cookiecutter-angular2-iodevs?path=%7B%7Bcookiecutter.project_name%7D%7D)
[![npm dev dependencies](https://david-dm.org/iodevs/cookiecutter-angular2-iodevs/dev-status.svg?path={{cookiecutter.project_name}})](https://david-dm.org/iodevs/cookiecutter-angular2-iodevs?path=%7B%7Bcookiecutter.project_name%7D%7D&info=devDependencies#info=devDependencies&view=table)

### Overview

This is [cookiecutter](https://github.com/audreyr/cookiecutter) template for modified [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter), see below on File structure...


### Usage:
You will be asked about your basic info (project name, description, etc.). This info will be used in your new project.

```
    $ pip install cookiecutter
    $ cookiecutter https://github.com/iodevs/cookiecutter-angular2-iodevs.git
    $ cd your-project-dir
    $ npm install
    $ npm start
```

## Stack

- [Angular2](https://angular.io/)
- [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter)
- [Typescript](https://www.typescriptlang.org/)
- [Karma](https://karma-runner.github.io/0.13/index.html)
- [TSLint](http://scikit-learn.org/stable/)
- ...

### File structure

In `scr` directory we have changed structure of directories and files:
```
app/
├── components/
│     └── app.ts
│
├── directives/
│     └── router-active.ts
│
├── models/
├── styles/
│     ├── index.scss
│     ├── partials/
│     │    ├── _anchors.scss
│     │    ├── _buttons.scss
│     │    └── _inputs.scss
│     │
│     └── views/
│          └── home.scss
│
├── templates/
│     └── home.html
│
├── tests/
│     ├── components/
│     │    ├── app.e2e.ts
│     │    └── app.spec.ts
│     │
│     └── views/
│          ├── about.spec.ts
│          ├── home.e2e.ts
│          └── home.spec.ts
│
├── views/
│     ├── about.ts
│     └── home.ts
│
└── index.ts
```

## License

MIT license


