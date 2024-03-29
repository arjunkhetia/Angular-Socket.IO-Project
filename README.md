# Angular Socket.IO Project   ![Version][version-image]

![Linux Build][linuxbuild-image]
![Windows Build][windowsbuild-image]
![NSP Status][nspstatus-image]
![Test Coverage][coverage-image]
![Dependency Status][dependency-image]
![devDependencies Status][devdependency-image]

The quickest way to get start with Angular - 13.3.0 & Socket.IO - 4.5.0, just clone the project:

```bash
$ git clone https://github.com/arjunkhetia/Node.Js-Express-Project.git
```

Install dependencies:

```bash
$ npm install
```

Start the Angular app at `http://localhost:4200/`:

```bash
$ npm start
```

You can clone the Back-end for this project with Node.Js, Express & Socket.IO at :

```bash
$ git clone https://github.com/arjunkhetia/Node.Js-Express-Socket.IO-Project.git
```

Install dependencies:

```bash
$ npm install
```

Start Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

Angular project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Socket.IO

Socket.IO enables real-time bidirectional event-based communication.

```ts
import * as io from 'socket.io-client';

// We can use either use 'https' or 'wss' (respectively 'http' or 'ws')
constructor() {
  this.socket = io('http://localhost:3000', {
    path: '/socket.io/',  // It is the name of the path that is captured on the server side.
    transports: ["websocket", "polling"],  // The low-level connection to the Socket.IO server.
    reconnectionAttempts: Infinity,  // The number of reconnection attempts before giving up.
    reconnectionDelay: 1000,  // The initial delay before reconnection in milliseconds
    reconnectionDelayMax: 5000,  // The maximum delay between two reconnection attempts. Each attempt increases the reconnection delay by 2x.
    timeout: 20000,  // The timeout in milliseconds for each connection attempt.
  });
}

public sendMessage(message: any) {
  this.socket.emit('client-message', message);
}

public getMessage = () => {
  return Observable.create((observer: any) => {
    this.socket.on('server-message', (message: any) => {
      observer.next(message);
    });
  });
}
```

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
