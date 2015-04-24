var fs = require('fs');
var del = require('del');
var tape = require('tape');

var serverDownloader = require('../index');

tape('setup', function (t) {
  'use strict';

  del(['downloaded', 'downloaded2'], function () {
    t.end();
  });
});

tape('should download to download/ folder', function (t) {
  'use strict';

  serverDownloader.download({
    id: '1.8.4'
  }, 'downloaded/').then(function (path) {
    fs.exists(path, function (exists) {
      if (exists) {
        t.end();
      } else {
        t.fail('File wasn\'t downloaded');
      }
    });
  }, function () {
    t.fail('Couldn\'t download server .jar');
  });
});

tape('cleanup', function (t) {
  'use strict';

  del(['downloaded', 'downloaded2'], function () {
    t.end();
  });
});

tape('should download to downloaded/test/deep folder', function (t) {
  'use strict';

  serverDownloader.download({
    id: '1.8.4'
  }, 'downloaded/test/deep/').then(function (path) {
    fs.exists(path, function (exists) {
      if (exists) {
        t.end();
      } else {
        t.fail('File wasn\'t downloaded');
      }
    });
  }, function () {
    t.fail('Couldn\'t download server .jar');
  });
});

tape('cleanup', function (t) {
  'use strict';

  del(['downloaded', 'downloaded2'], function () {
    t.end();
  });
});

tape('should download to downloaded folder', function (t) {
  'use strict';

  serverDownloader.download({
    id: '1.8.4'
  }, 'downloaded').then(function (path) {
    fs.exists(path, function (exists) {
      if (exists) {
        t.end();
      } else {
        t.fail('File wasn\'t downloaded');
      }
    });
  }, function () {
    t.fail('Couldn\'t download server .jar');
  });
});

tape('cleanup', function (t) {
  'use strict';

  del(['downloaded', 'downloaded2'], function () {
    t.end();
  });
});
