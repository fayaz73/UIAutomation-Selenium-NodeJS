var expectedResult = require('./expectedOP');
const ExpedtedloginMsg = { output: { succMsg: 'Dashboard', errMsg: { errMsg1: '', errMsg2: '', errMsg3: '' } } };
const ExpectedlogoutMsg = { output: { succMsg: 'Logged out successfully', errMsg: { errMsg1: 'some error message 1', errMsg2: '', errMsg3: '' } } };
const ExpectedSegmentListPage = {output: {succMsg: 'Create New Segment'}};
/* const ExpectedSegmentCreated = {output: {succMsg: 'cdpTestSegment0025', errMsg: {sameNameErrMsg:'Segment with same name already exist.',atleastOneRuleError:'There must be at least 1 rule'}}} */
const ExpectedSegmentCreated = {
  output: {
    succMsg: 'cdpTestSegTest888',
    errMsg: {
      sameNameErrMsg: 'segment with same name already exist.',
      atleastOneRuleError: 'There must be at least 1 r',
      addAtleastOneRule: 'Please add at least one rule'
    }
  }
};
module.exports = {
    ExpedtedloginMsg: ExpedtedloginMsg,
    ExpectedlogoutMsg: ExpectedlogoutMsg,
    ExpectedSegmentListPage : ExpectedSegmentListPage,
    ExpectedSegmentCreated : ExpectedSegmentCreated
  };