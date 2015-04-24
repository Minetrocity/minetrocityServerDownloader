var Q = require('q');
var fs = require('fs');
var request = require('request');

var baseUrl = 'https://s3.amazonaws.com/Minecraft.Download/versions/';
var midUrl = '/minecraft_server.';
var endUrl = '.jar';

module.exports = {
  download: download
};

function download (server, path) {
  var deferred = Q.defer();

  reqest(baseUrl + server.id + midUrl + server.id + endUrl)
    .pipe(fs.createWriteStream(path))
    .on('close', function () {
      deferred.resolve();
    })
    .on('error', function () {
      deferred.reject();
    });

  return deferred.promise;
}
