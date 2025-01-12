function foo(x) {
  if (x === undefined || x === null) {
    return 0; // Handle undefined and null cases
  } else if (typeof x === 'object' && x !== null && 'length' in x) {
      return x.length;
  } else if (typeof x === 'string') {
    return x.length;
  } else {
    return 0 //Handle any other type
  }
} 