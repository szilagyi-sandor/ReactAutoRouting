export const checkSelectorsSiblingRelation = (
  s1: string[],
  s2: string[],
  acceptSame = true
): boolean => {
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length - 1; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }

  if (s1[s1.length - 1] === s2[s2.length - 1] && !acceptSame) {
    return false;
  }

  return true;
};
