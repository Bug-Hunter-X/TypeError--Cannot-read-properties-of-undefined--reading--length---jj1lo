# JavaScript Bug: TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of undefined (reading 'length')`.  The error arises when attempting to access the `length` property of a variable that holds an `undefined` value.  This often occurs when a variable is expected to be an array or string but hasn't been properly initialized or assigned a value.

**Steps to reproduce:**
1. Clone the repository.
2. Run `bug.js`.
3. Observe the error.

**Solution:**
The `bugSolution.js` file provides a solution that demonstrates safe handling of potentially undefined variables by explicitly checking for undefined values before accessing properties.