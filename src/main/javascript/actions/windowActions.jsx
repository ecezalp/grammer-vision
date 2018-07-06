export const persistStateOnLocalStorage = state => {
  console.log(state);
  window.localStorage.setItem("grammar-vision-state", JSON.stringify(Object.assign({}, state)));
};

export const cleanStateOnLocalStorage = () => {
  window.localStorage.setItem("grammar-vision-state", undefined);
};

export const readStateOnLocalStorage = () => {
  let item = window.localStorage.getItem("grammar-vision-state");
  if (item !== "undefined") return JSON.parse(item);
};

export const setWindowLocation = location => window.location.href = location;

export const isStorageDirty = () => {
  let storageState = readStateOnLocalStorage();
  return !(storageState === "undefined" || typeof storageState === "undefined" || storageState === null);
};