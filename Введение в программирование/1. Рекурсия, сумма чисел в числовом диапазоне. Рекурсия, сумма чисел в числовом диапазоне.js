const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin === end) {
    return end;
  }
  if (begin > end) {
    return NaN;
  }
  return begin + sequenceSum(begin + 1, end);
  // END
};
export default sequenceSum;