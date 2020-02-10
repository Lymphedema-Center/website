/* istanbul ignore file */
import Router from "next/router";

const actionWithPromise = () => new Promise(resolve => resolve());

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {}
};

Router.router = mockedRouter as any;
