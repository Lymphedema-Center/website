#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { AuthStack } from "../lib/auth-stack";

const app = new cdk.App();
const authStack = new AuthStack(app, "AuthStack");
cdk.Tag.add(authStack, "Project", "LymphedemaCenterWebsite");
