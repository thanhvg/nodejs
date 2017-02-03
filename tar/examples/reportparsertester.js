let report = "CUSTOMER=\"Robert\"" +
  "\n" +
  "EMAIL=\"robertk@mysignagenow.com\"" +
  "\n" +
  "DATE=\"Wed Feb  1 11:17:49 2017\"" +
  "\n" +
  "UPTIME=\" 11:17:49 up 13 min,  0 users,  load average: 3.93, 2.55, 1.21" +
  "\n\"\n" +
  "PRODUCT=\"Userful\"" +
  "\n" +
  "VERSION=\"8.8.1\"" +
  "\n" +
  "TICKET=\"\"" +
  "\n" +
  "DETAILS=\"\"\"" +
  "\n" +
  "Category: Other" +
  "\n" +
  "\n" +
  "What Were They Doing: USB Cannot Mount" +
  "\n" +
  "\n" +
  "Flash Content will not play in a Browser Session." +
  "\n" +
  "\n" +
  "Platform: Linux userful-d85984 4.4.0-2.el7.elrepo.x86_64 #1 SMP Tue Jan 26 13:06:01 EST 2016 x86_64 x86_64" +
  "\n" +
  "Description:" +
  "\n" +
  "USB Cannot Mount" +
  "\n" +
  "\n" +
  "Flash Content will not play in a Browser Session." +
  "\n" +
  "\n" +
  "My VPN IP# 172.26.0.178" +
  "\n" +
  "Browser Details: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/538.15 (KHTML, like Gecko) Version/8.0 Safari/538.15" +
  "\n" +
  "\"\"\"" ;

console.log(report);

var problem = {
  systemId: "",
  mac: "",
  customer: "",
  email: "",
  date: "",
  uptime: "",
  product: "",
  version:"",
  ticket:"",
  details : {
    category: "",
    whatWereDoing:"",
    platform:"",
    description:"",
    tarball:"",

  }
}
problem.customer = /CUSTOMER="(.*)"/.exec(report)[1];
problem.email = /\nEMAIL="(.*)"/.exec(report)[1] || '';
problem.date = /\nDATE="(.*)"/.exec(report)[1] || '';
problem.uptime = /\nUPTIME="(.*)"*/.exec(report)[1] || '';
problem.product = /\nPRODUCT="(.*)"/.exec(report)[1] ;
problem.version = /\nVERSION="(.*)"/.exec(report)[1] ;
problem.ticket = /\nTICKET="(.*)"/.exec(report)[1] ;
problem.details.category = /\nCategory: (.*)/.exec(report)[1] ;
problem.details.whatWereDoing = /\nWhat Were They Doing:([\s\S]*)\nPlatform:/.exec(report)[1] ;
problem.details.platform = /\nPlatform: (.*)/.exec(report)[1] ;
problem.details.description = /\nDescription:\n([\s\S]*)\nBrowser Details/.exec(report)[1] ;

console.log(problem);
