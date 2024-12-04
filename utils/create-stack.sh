#aws cloudformation create-stack  \
#--cli-input-json file://Pipeline-Stack-Config.json \
#--profile $profile \
#--region eu-central-1 \
#--template-body file://codepipeline-template.yaml

aws cloudformation update-stack \
--cli-input-json file://Pipeline-Stack-Config.json \
--profile maks.maxware.development \
--region eu-central-1 \
--template-body file://codepipeline-template.yaml


