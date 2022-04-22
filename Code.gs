function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/15KsMmbrcqV3Ma1DXcKtoEIHp3IWKNbRHi_YtuttJQQY/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Sheet1");

  ws.appendRow([

    formObject.Question01,

    formObject.Question02Answer01,
    formObject.Question02Answer02,
    formObject.Question02Answer03,
    formObject.Question02Answer04,

    formObject.Question03Answer01,
    formObject.Question03Answer02,
    formObject.Question03Answer03,
    formObject.Question03Answer04,

    formObject.Question04Answer01,
    formObject.Question04Answer02,
    formObject.Question04Answer03,
    formObject.Question04Answer04,

    formObject.Question05Answer01,
    formObject.Question05Answer02,
    formObject.Question05Answer03,
    formObject.Question05Answer04,
    formObject.Question05Answer05,
    formObject.Question05Answer06,

    formObject.Question06Answer01,
    formObject.Question06Answer02,
    formObject.Question06Answer03,
    formObject.Question06Answer04,
    formObject.Question06Answer05,
    formObject.Question06Answer06,
    formObject.Question06Answer07,
    formObject.Question06Answer08,
    formObject.Question06Answer09,

    formObject.Question07,

    formObject.Question08Answer01,
    formObject.Question08Answer02,
    formObject.Question08Answer03,
    formObject.Question08Answer04,

    formObject.Question09,

    formObject.Question10,

    //student information
    formObject.Name,
    formObject.PhoneNumber,
    formObject.Email,

  ]);
}

