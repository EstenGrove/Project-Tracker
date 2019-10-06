async function saveToStorage(key, item) {
  if (!key && item === undefined) return;
  window.localStorage.setItem(key, JSON.stringify(...item));
}

async function getFromStorage(key) {
  const { items } = { ...localStorage };
  return JSON.parse(items);
}

export { saveToStorage, getFromStorage };
