export function checkKey(key, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].key === key) {
      return true;
    }
  }
  return false;
}
