// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 09 Apr 2016 00:08:49 GMT',
  etag: '0x8D3600B2070743A',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6dd92b08-172e-468f-9ef7-e78e6558a75f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '4d2b2824-2249-42ab-9f37-6e7c384f80ba',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool',
  date: 'Sat, 09 Apr 2016 00:08:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 09 Apr 2016 00:08:49 GMT',
  etag: '0x8D3600B2070743A',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6dd92b08-172e-468f-9ef7-e78e6558a75f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '4d2b2824-2249-42ab-9f37-6e7c384f80ba',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool',
  date: 'Sat, 09 Apr 2016 00:08:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3600B2070743A\",\"lastModified\":\"2016-04-09T00:08:49.4519354Z\",\"creationTime\":\"2016-04-09T00:08:49.4519354Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-09T00:08:49.4519354Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-04-09T00:08:49.6063845Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:08:49 GMT',
  etag: '0x8D3600B2070743A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f64a8cec-9649-41ca-954d-15b888e58951',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0467a914-1d91-4a29-810f-bb684509d02d',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:08:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3600B2070743A\",\"lastModified\":\"2016-04-09T00:08:49.4519354Z\",\"creationTime\":\"2016-04-09T00:08:49.4519354Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-09T00:08:49.4519354Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-04-09T00:08:49.6063845Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:08:49 GMT',
  etag: '0x8D3600B2070743A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f64a8cec-9649-41ca-954d-15b888e58951',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0467a914-1d91-4a29-810f-bb684509d02d',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:08:51 GMT',
  connection: 'close' });
 return result; }]];