// Function to set an item in local storage
export async function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to get an item from local storage
export async function getLocalStorageItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Function to clear an item from local storage
export async function clearLocalStorageItem(key) {
  localStorage.removeItem(key);
}