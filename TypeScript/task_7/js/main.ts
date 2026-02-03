// String literal type
type Subjects = 'Math' | 'History';

// Function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Expected result
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
