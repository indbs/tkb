var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'TKB_INVESTMENT_RECEIVE_DATA_SERVICE',
  script: require('path').join(__dirname,'es.js')
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
});

// Uninstall the service.
svc.uninstall();

//npm link node-windows!!!!!!!!!!
//В консоли под Администратором

//проверка зависающей службы
//netstat -ano | find "LISTENING" | find "8071"
//-kill-
//taskkill /pid 14828
//-force kill-
//taskkill /pid 14828 /f