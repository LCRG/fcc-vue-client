const { suite, Test, suiteInstance } = require('../lib/mocha-setup')
const { assert, expect } = require('chai')
const reportValue = require('mochawesome/addContext')

const defineTestSuiteAndAddTests = () => {
  const parentSuiteName = suite('sample test suite')
  comparisonWithNumber10Tests(parentSuiteName)
  stringValidationTests(parentSuiteName)
  testUnderParentSuite(parentSuiteName)
  testFCCAssert(parentSuiteName)
}

const comparisonWithNumber10Tests = parentSuite => {
  const testSuite = suiteInstance.create(
    parentSuite,
    'Comparison of number with 10'
  )
  ;[...Array(10).keys()].forEach(i => {
    testSuite.addTest(
      new Test(`Validate ${i} is not equal to 10`, function() {
        reportValue(this, `Current value ${i}`)
        expect(i).to.not.equal(10)
      })
    )
  })
}

const stringValidationTests = parentSuite => {
  const testSuite = suiteInstance.create(
    parentSuite,
    `Validate specific word's presence in the sentence`
  )
  testSuite.addTest(
    new Test(
      `Validate 'home' is present in 'stay home, stay safe'`,
      function() {
        expect('stay home, stay safe').to.include.string('home')
      }
    )
  )
}

const testUnderParentSuite = parentSuite => {
  parentSuite.addTest(
    new Test('Validate number is less than 11', function() {
      const number = 10
      expect(number).to.be.lessThan(11)
    })
  )
}

const testFCCAssert = parentSuite => {
  const testSuite = suiteInstance.create(
    parentSuite,
    'Test of FCC assert syntax'
  )
    testSuite.addTest(
        new Test(
            `You should declare a <code>@media</code> query for devices with a <code>height</code> less than or equal to 800px.`,
            function () {
        assert(getComputedStyle('.responsive-img'[0]).maxWidth === '100%')
      }
    )
  )
}

module.exports = { defineTestSuiteAndAddTests }
