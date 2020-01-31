#!/usr/bin/env node
import cdk = require("@aws-cdk/core");
import { FrontendStack } from "../src/stacks/FrontendStack";

// create app
const app = new cdk.App();

// add stacks
new FrontendStack(app, "FrontendStack");

// tag app
cdk.Tag.add(
  app,
  "Lymphedema-Center",
  "Part of the Lymphedema Center application."
);
