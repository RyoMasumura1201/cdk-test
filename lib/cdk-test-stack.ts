import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc, SubnetType } from "aws-cdk-lib/aws-ec2";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "CDKTest", {
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: "west-subnet",
          subnetType: SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: "east-subnet",
          subnetType: SubnetType.PUBLIC,
        },
      ],
    });
  }
}
