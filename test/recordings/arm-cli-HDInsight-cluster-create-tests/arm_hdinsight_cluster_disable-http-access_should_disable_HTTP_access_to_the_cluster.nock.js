// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_HDI_TEST_LOCATION'] = 'westeurope';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway/operationresults/fe7305f9-e3eb-4ffd-9218-08aaf3c3daf8-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway/azureasyncoperations/fe7305f9-e3eb-4ffd-9218-08aaf3c3daf8-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '77e43989-72df-4fb8-8da3-14602220df0e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0d3c10bb-c68d-41ee-b770-87eb3a1f1145',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T082625Z:0d3c10bb-c68d-41ee-b770-87eb3a1f1145',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:26:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway/azureasyncoperations/fe7305f9-e3eb-4ffd-9218-08aaf3c3daf8-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '773af194-bfd5-4b58-a4d5-a8b010bc47f4',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'dadc828f-2ee0-46a8-b509-689fa5f17294',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T082726Z:dadc828f-2ee0-46a8-b509-689fa5f17294',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:27:25 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway/azureasyncoperations/fe7305f9-e3eb-4ffd-9218-08aaf3c3daf8-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '480aab6b-0277-4f34-9063-6f0b8dc337c4',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'b6b8e53b-149b-4f27-ab1c-08549a6bdb83',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T082827Z:b6b8e53b-149b-4f27-ab1c-08549a6bdb83',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:28:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway/azureasyncoperations/fe7305f9-e3eb-4ffd-9218-08aaf3c3daf8-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '28eb9620-f994-47d4-b043-323a6d1e9984',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '6b5836a4-b462-43e8-8e97-0c40ba9c449a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T082928Z:6b5836a4-b462-43e8-8e97-0c40ba9c449a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:29:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway/azureasyncoperations/fe7305f9-e3eb-4ffd-9218-08aaf3c3daf8-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cfe1db19-5f8d-46c8-9c67-3549d411e157',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '180ac263-d2d8-4e6f-bff1-b47930da0759',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T083028Z:180ac263-d2d8-4e6f-bff1-b47930da0759',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:30:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5806/configurations/gateway/azureasyncoperations/fe7305f9-e3eb-4ffd-9218-08aaf3c3daf8-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7b3c698f-9857-4b48-8090-43d9b2b71d78',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '7a6c2e3e-776a-4bc9-82fa-58d5347efedd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T083129Z:7a6c2e3e-776a-4bc9-82fa-58d5347efedd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:31:28 GMT' });
 return result; }]];