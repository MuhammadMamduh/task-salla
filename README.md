# Documentation
### Framework Features
+ This is a simple playwright test automation framework.
+ You can find the tests in `e2e.spec.ts`
+ The framework contains page objects that we call in the `e2e.spec.ts` file.
+ The framework can generate allure reports.
+ The framework take screenshots incase of any failure.
+ The framework contains the resources directory which should contain all the test data
  + Currently it contains only 1 image.
+ The framework uses the _**faker library**_ to generate dummy text.
+ This framework contains 2 tests:
  - TC_1 | ADD Artwork and Verify its ADDED
  - TC_2 | ADD Review & Verify its ADDED
### How to run:
1) use `npm test` to run the tests in series.
2) use `npm run test-parallel` to run the tests in parallel.
3) use `npm run allure-generate` to generate allure reports.
4) use `npm run allure-open` to open the generated allure reports.
### Future Enhancements
+ Create a utilities class to wrap up common functionalities.
+ Use the faker library more in the code.
+ Add more test data
+ Split the TCs into steps
