import { getParameters } from "codesandbox/lib/api/define";

document.body.innerHTML = "";

// below is the code
const code = `import React from 'react';
import ReactDOM from 'react-dom';                              

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Meck',
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);`;
const html = '<div id="root"></div>';

const parameters = getParameters({
  files: {
    "package.json": {
      content: {
        dependencies: {
          react: "latest",
          "react-dom": "latest"
        }
      }
    },
    "index.js": {
      content: code
    },
    "index.html": {
      content: html
    }
  }
});

document.body.innerHTML = `
<form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
  <input type="hidden" name="parameters" value="${parameters}" />
  <input type="submit" value="Open in sandbox" />
</form>
`;
