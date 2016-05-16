# Project Hamburger

> GraphQL API backed by AWS Lambda, served via AWS API Gateway. Munch, Munch, Munch...

## Creating new project

A new project based on the project template is initialized with the command

```
> sls project install -n myProjectName sc5-serverless-boilerplate
> cd myProjectName
> npm install
```

## Using the REST endpoint templates

The REST endpoint templates can be used by refering to them in RequestTemplates in the endpoints section of the s-function file.
For example (for an endpoint with GET method)

```
RequestTemplates: "$${restGet}"
```

When using the REST endpoint templates, the incoming event has the following structure:
```
{
    "method": "GET/POST/PUT/DELETE/...",
    "body": { ... payload sent by client ... },  (only in restPost and restPut)
    "id": "identifier" (only in restPut and restDelete)
}
```

## Defining CORS headers

Add the following to the "custom" section of either _s-components_ or _s-function_ files.

```
"cors": {
    "allowOrigin": "*",
    "allowHeaders": ["Content-Type", "X-Amz-Date", "Authorization", "X-Api-Key"]
}
```

Deploy the endpoints (after deploying functions) inside the component folder using
```
sls endpoint deploy --all
```
Using this (instead of e.g. sls dash deploy) ensures that CORS headers (incl. the OPTIONS method
required for CORS preflight) are created properly

(see https://github.com/joostfarla/serverless-cors-plugin)

## Determining project name / stage during runtime

Some resources (e.g. database tables, SNS topics, etc...) may be specific to the project and stage.
The project name and stage name can be determined during runtime using
```
  process.env.SERVERLESS_PROJECT_NAME (for the project name)
  process.env.SERVERLESS_STAGE (for the project stage)
```

## Test Driven Development

Function test are created automatically when creating new functions into the test/ directory.
See [serverless-mocha-plugin](https://github.com/SC5/serverless-mocha-plugin) for more info
