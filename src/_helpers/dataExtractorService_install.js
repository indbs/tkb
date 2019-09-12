var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'TKB_INVESTMENT_RECEIVE_DATA_SERVICE',
  description: 'JSON data for ui',
  script: 'C:\\js\\testmysql\\TKB_INVESTMENT\\es.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();

//npm link node-windows!!!!!!!!!!
//В консоли под Администратором