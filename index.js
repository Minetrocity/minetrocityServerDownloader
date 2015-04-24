var Q = require('q');
var fs = require('fs');
var mkdirp = require('mkdirp');
var request = require('request');

var baseUrl = 'https://s3.amazonaws.com/Minecraft.Download/versions/';
var midUrl = '/minecraft_server.';
var endUrl = '.jar';

module.exports = {
  download: download
};

function download (server, dir) {
  'use strict';

  var deferred = Q.defer();
  var path = dir + '/server.' + server.id + '.jar';

  mkdirp(dir, function () {
    request(baseUrl + server.id + midUrl + server.id + endUrl)
      .pipe(fs.createWriteStream(path))
      .on('close', function () {
        deferred.resolve(path);
      })
      .on('error', function (err) {
        deferred.reject(err);
      });
  });


  return deferred.promise;
}
