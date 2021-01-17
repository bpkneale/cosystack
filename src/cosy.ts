
import * as cdk from "@aws-cdk/core"
import * as amplify from "@aws-cdk/aws-amplify"

export class CosyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const frontend = new amplify.CfnApp(this, 'cosy-cuppies-frontend', {
            name: 'cosy-cuppies-frontend',
            repository: 'https://github.com/bpkneale/cosycuppies'
        })

        new amplify.CfnBranch(this, 'main', {
            appId: frontend.attrAppId,
            branchName: 'main'
        })
    }
}

const app = new cdk.App();
new CosyStack(app, 'CosyCuppiesApp');
app.synth();
