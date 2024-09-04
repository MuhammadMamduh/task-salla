# Documentation
### Framework Features
+ This is a simple playwright test automation framework.
+ You can find the tests in `e2e.spec.ts`
+ The framework contains page objects that we call in the `e2e.spec.ts` file.
+ The framework can generate `Allure Reports`.
+ The framework take `Screenshots` incase of any failure.
+ The framework contains the `resources` directory which should contain all the test data
  + Currently it contains only 1 image.
+ The framework uses the `Faker Library` to generate dummy text.
+ This framework contains 2 tests:
  - `TC_1 | ADD Artwork and Verify its ADDED`
  - `TC_2 | ADD Review & Verify its ADDED`
+ These 2 tests each run 10 times agains the 3 web browsers (Chrome, Firefox, & Safari) all in the headless mode.
+ From the point above, we get that after running the TCs, we have 60 TCs runs.
### How to run:
1) use `npm test` to run the tests in series.
2) use `npm run test-parallel` to run the tests in parallel.
3) use `npx playwright show-report` to show the default playwright report.
4) use `npm run allure-generate` to generate allure reports.
5) use `npm run allure-open` to open the generated allure reports.
### Future Enhancements
+ Create a utilities class to wrap up common functionalities.
+ Use the faker library more in the code.
+ Add more test data
+ Split the TCs into steps
