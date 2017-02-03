function getMacAddress(systemId) {
  // var systemId = getSystemIdFromFileName(fullpath);
  var exec = require('child_process').exec;
  exec('./dm-gen-info -decode ' + systemId,
      function(error, stdout, stderr){
        console.log(stdout) ;
      });
}

function genTicketId() {
  var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 9; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



getMacAddress('E00-B9DB-0ECF-38C8');
console.log(genTicketId());
