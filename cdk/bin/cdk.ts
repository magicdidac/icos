#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { GQLStack } from '../lib/GQLStack';
import { ICOSStack } from '../lib/ICOSStack';

const app = new cdk.App();
new GQLStack(app, 'icos-stack', {});
new ICOSStack(app, 'icos-api-stack', {});