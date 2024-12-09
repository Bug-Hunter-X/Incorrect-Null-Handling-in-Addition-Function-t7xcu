function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This is incorrect for non-null values
  }
  return a + b; 
}