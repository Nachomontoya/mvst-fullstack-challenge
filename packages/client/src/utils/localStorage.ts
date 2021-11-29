import { ReduxState } from "./types";

function loadLocalStorage(storageKey: string, defaultValue: ReduxState) {
  const data = localStorage.getItem(storageKey);

  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}

function setLocalStorage(storageKey: string, data: ReduxState) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export { loadLocalStorage, setLocalStorage };
