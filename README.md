### About the function
This function is designed to be used within the Slack Workflow Builder. The function reads a slack message and then makes an API call to OpenAI to take action on the context. The AI response is then saved as an output variable. 

### Dependencies and setup
1. This function requires an OpenAI API api key, which you can generate at OpenAI API Keys.
2. Once the key is generated, add it as an environment variable named `OPEN_AI_KEY` . Refer to the sample.env file for guidance.
https://github.com/peoplesj/ai-summarize-function/assets/105441105/806a1021-84ca-418a-a589-b74e1a93de65

### Modify the function
Once the Slack CLI is installed and authorized within a Slack Workspace. Clone this repo to your local system using the Slack CLI command
```
slack create --template peoplesj/custom-ai-function-broken
```

