var expectedResult = require('./expectedOP');
const rcsEngageMandInput = {
    input:{validMandatory:{
        withSpaceDEF31:'    ',
        onlyTextDEF31:'mandtryParammandtryParam',
        onlyNumberDEF31:'123456',
        combineTxtNumDEF31:'Param12345',
        specialCharDEF31:'~!@#$%^&*():;<>?,.',
        withEmptyDEF31:'',
        withNULLDEF31:'null',
        longTextDEF31:'mandtryParammandtryParammandtryParammandtryParammandtryParam'}},
        expectedOutput: expectedResult.ExpectedOutPutRCSEngage 
    };

const rcsEngageContentTagInput = {
  input:{validContentTag:{
    onlyTextTag5:'contentTagcontentTag',
    onlyNumbersTag5:'123456',
    //combineTxtNumTag5:'contenttag12345',
    //specialCharTag3:'~!@#$%^&*():;<>?,.',
    //withEmptyTag3:'',
    //withNULLTag3:'null',
    //withSpacesTag3:'    ',
    longTextTag3:'contenttag12345contenttag12345contenttag12345contenttag12345'}},
    expectedOutput: expectedResult.ExpectedOutPutContentTagRCSEngage 
  };

  const rcsEngageContentAttributeInput = {
    input:{validContentAttribute:{
      onlyTextAttri:'contentAttributecontentAttribute',
      onlyNumbersAttri:'1234567891011',
      combineTxtNumAttri:'contentAttribute12345',
      specialCharAttri:'~!@#$%^&*():;<>?,.',
      withEmptyAttri:'',
      withNULLAttri:'null',
      withSpacesAttri:'    ',
      longTextAttri:'contentAttribute12345contentAttribute12345contentAttribute12345'}},
      expectedOutput: expectedResult.ExpectedOutPutContentAttributeRCSEngage 
    };

    module.exports = {
        rcsEngageInput: rcsEngageMandInput,
        rcsEngageContentTagInput: rcsEngageContentTagInput,
        rcsEngageContentAttributeInput: rcsEngageContentAttributeInput
      };