import { App, CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import { Cors, LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Architecture, HttpMethod, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from 'path';

export class ICOSStack extends Stack {
  constructor(app: App, id: string, props: StackProps) {
    super(app, id, props)
    const lambda = new NodejsFunction(this, 'icos-lambda', {
      architecture: Architecture.ARM_64,
      memorySize: 128,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(10),

      handler: 'handler',
      entry: path.join(__dirname, '/../../icosApi/src/index.ts'),
      environment: {
        FTP_ACCOUNT: process.env.FTP_ACCOUNT ?? 'FTP_ACCOUNT is not setted',
        FTP_PASSWORD: process.env.FTP_PASSWORD ?? 'FTP_PASSWORD is not setted'
      }
    })

    const api = new RestApi(this, 'restapi', {
      defaultCorsPreflightOptions: {
        allowHeaders: Cors.DEFAULT_HEADERS,
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: [HttpMethod.POST]
      },
      restApiName: 'icos-API'
    })

    api.root.addMethod(HttpMethod.POST, new LambdaIntegration(lambda))
  }
}