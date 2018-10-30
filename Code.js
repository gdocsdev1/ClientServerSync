function onInstall(e) {
  onOpen(e);
}

function onOpen(e){
  var mainMenu = SpreadsheetApp.getUi().createAddonMenu();
  mainMenu.addItem('Sidebar', 'onSidebar');
  mainMenu.addItem('Clear Cache', 'onClearCache');
  mainMenu.addToUi();
}

function onSidebar(){
  var html = HtmlService.createHtmlOutputFromFile('sidebar').setTitle('My Sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
} 

function onClearCache() {
  PropertiesService.getDocumentProperties().deleteAllProperties();
}

function setUserData(userData){
  var name = userData.fName + ' ' + userData.lName;
  PropertiesService.getDocumentProperties().setProperty('USER_NAME', name);
}

function getUsers(){
  var users = [];
  var name = PropertiesService.getDocumentProperties().getProperty('USER_NAME');
  if(name == null){
    var html1 = HtmlService.createHtmlOutputFromFile('userDetails').setWidth(300).setHeight(200);
    SpreadsheetApp.getUi().showModalDialog(html1,'User Details'); 
  } else {
    users.push(name);
  }
  return users;
}
