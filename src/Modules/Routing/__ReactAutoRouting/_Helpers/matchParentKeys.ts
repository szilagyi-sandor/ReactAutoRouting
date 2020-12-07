export const matchParentKeys = (parentKeys: string[], itemKeys: string[]) => {
  for (let i = 0; i < parentKeys.length; i++) {
    if (parentKeys[i] !== itemKeys[i]) {
      return false;
    }
  }

  return true;
};
