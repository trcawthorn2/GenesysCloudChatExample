# GenesysCloudChatroupExample
This repo contains a sample example of a client app. This app will authenticate and chat groups you are a member of and allow you to search across them.

# Setup
* Create ClientId
* Create Client App

## Create ClientId
Create a new Auth Client with the following settings.
* Grant Types: Token Implicit Grant
* Authorized redirect URI: https://trcawthorn2.github.io/GenesysCloudGroupExample/index.html
* Scope: Groups
## Create Client App
Create a client app with the following configuration. Variables that you will need to substitue your specific information is denoted by {{}}.
* Application URL: https://trcawthorn2.github.io/GenesysCloudChatExample/index.html?clientId={{clientId}}&region={{region}}
* Application Type: Standlone
* Group Filtering: {{Groups you would like to have access to use the app}}
* Active the client app. 


# Build / pacakge
To build for deployment run `ember build  --output-path doc`
to run local `ember s`