export function checkKey(key, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].key === key) {
      return true;
    }
  }
  return false;
}

export function extractKey(list) {
  if (list) {
    return [];
  } else {
    return list.map(item => item.key);
  }
}
