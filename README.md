AEMO DATA DOWNLOAD
========================

## Setup

1. `Create a bucket in s3 where the file gets downloaded`
2. `Add the bucket name to Resource "arn:aws:s3:::<bucket-name>/*"` section in `policies/s3-bucket-access.json`
3. Make sure the `bucketName` variable has the name of the bucket configured in the above steps
4. Run `npm install`
5. Configure the name of your function in `package.json` in the `start` command
6. Run `npm start` to create your lambda function
7. Run `npm run schedule` to attach the schedule event trigger

## Update

1. Run `npm run deploy` to update your function after making changes
