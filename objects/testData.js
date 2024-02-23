var expectedResult = require('./expectedOP');
const username = { input: { validusername: 'ahamed6035', invalidusername: { specialCharacter: '', onlyNumber: '', onlyString: '' } }, expectedOutput : expectedResult.ExpedtedloginMsg};
const password = { input: { validpassword: '123$Urbanladder', invalidusername: { specialCharacter: '1233#@$U', onlyNumber: '', onlyString: '' } } , expectedOutput : expectedResult.ExpedtedloginMsg};
const logOutMsg = { input: {},expectedOutput: expectedResult.ExpectedlogoutMsg };
const segmentListPage = { input: {},expectedOutput: expectedResult.ExpectedSegmentListPage };
const segmentCreatePage = {input: {}, expectedOutput: expectedResult.ExpectedSegmentCreated };
//const url = {input: {validurl:'https://cdp.lemnisk.co/app/login/'}};
const url = {input: {validurl:'https://ttl.lemnisk.co/app'}};

module.exports = {
    username: username,
    password: password,
    logOutMsg: logOutMsg,
    segmentListPage: segmentListPage,
    segmentCreatePage: segmentCreatePage,
    url: url
  };
