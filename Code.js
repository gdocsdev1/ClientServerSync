function onInstall(e) {
  onOpen(e);
}

function onOpen(e){
  var mainMenu = SpreadsheetApp.getUi().createAddonMenu();
  mainMenu.addItem('Sidebar', 'onSidebar');
  mainMenu.addToUi();
}

function onSidebar(){
  var html = HtmlService.createHtmlOutputFromFile('sidebar').setTitle('My Sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
} 

var items = ["One", "Two", "Three"];
  
function showUserForm(){
  console.log('Items = ' + JSON.stringify(items));
  var html1 = HtmlService.createHtmlOutputFromFile('userDetails').setWidth(300).setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(html1,'User Details'); 
  
  items.push('Five');
  console.log('Items = ' + JSON.stringify(items));
}

function setUserData(userData){
  items.push('Four');
  console.log('Items = ' + JSON.stringify(items));
}