import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc, PublicSubnet, Instance } from "aws-cdk-lib/aws-ec2";

export class CdkTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "CDKTest", {
      availabilityZones: ["ap-northeast-1a", "ap-northeast-1c"],
      subnetConfiguration: [],
    });

    const eastSubnet = new PublicSubnet(this, "east-subnet", {
      availabilityZone: "ap-northeast-1a",
      vpcId: vpc.vpcId,
      cidrBlock: "10.0.0.0/24",
    });

    const westSubnet = new PublicSubnet(this, "west-subnet", {
      availabilityZone: "ap-northeast-1c",
      vpcId: vpc.vpcId,
      cidrBlock: "10.0.1.0/24",
    });
  }
}
