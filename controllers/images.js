const aws = require("aws-sdk");
const config = require("./config.json");

// async function () {
//     try{
//         aws.config.setPromisesDependency();
//         aws.config.update({
//             accessKeyId: config.accessKey,
//             secretAccessKey: config.aws.secretKey,
//             region: 'us-east-1'
//         })

//         const s3 = new aws.S3();
//         const response = await s3.listObjectsV2({
//             Bucket: 'sqb-sample-2018',
//             Prefix: 'folder1'
//         }).promise();
//         console.log(response)

// }catch (e){
//     console.log('our error', e)
// }}
