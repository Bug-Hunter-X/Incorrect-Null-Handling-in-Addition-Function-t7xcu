function foo(a, b) {
  if (a === null && b === null) {
    return 0; 
  } else if (a === null || b === null) {
    return NaN; // Handle cases where only one is null
  }
  return a + b; 
}