📦 Jest - JavaScript Testing Framework
Jest is a delightful JavaScript testing framework developed by Facebook. It's widely used for testing JavaScript applications, especially in projects using React, Node.js, and other JavaScript-based libraries and frameworks.

🚀 Features
Zero configuration – Works out of the box for most JavaScript projects.

Fast and sandboxed – Runs tests in parallel for faster execution.

Snapshots – Easily create and test UI snapshots.

Mocking – Powerful tools for mocking functions, modules, and timers.

Code Coverage – Built-in support to generate test coverage reports.

🔧 Getting Started
Install Jest using npm:

bash
Copy
Edit
npm install --save-dev jest
Add a test script in your package.json:

json
Copy
Edit
"scripts": {
  "test": "jest"
}
Create a test file (e.g., sum.test.js):

javascript
Copy
Edit
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
Run tests:

bash
Copy
Edit
npm test

