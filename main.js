var aws = require('aws-sdk');
var bluebirdPromise = require('bluebird');
var axios = require('axios');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var _ = require("lodash");

var putObject = function(bucket, key, body) {
    return new bluebirdPromise(function(resolve, reject) {
        var s3 = new aws.S3();
        var params = {
            Bucket: bucket,
            Key: key,
            Body: body
        };

        s3.putObject(params, function(error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

exports.handler = function(event, context) {
    'use strict';

    axios
        .get('http://www.nemweb.com.au/mms.GRAPHS/GRAPHS/GRAPH_30NSW1.csv')
        .then(function(response) {
            var aemodata = response.data

            putObject('kuro-data-in', 'aemo-data-current-nsw.csv', aemodata);
        })
}
