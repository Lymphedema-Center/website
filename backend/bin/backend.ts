#!/usr/bin/env node
import cdk = require("@aws-cdk/core");
import { BackendStack } from "../src/backend-stack";

const app = new cdk.App();
new BackendStack(app, "BackendStack");
