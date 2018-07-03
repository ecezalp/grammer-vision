
export const persistStateOnLocalStorage = state => window.localStorage.setItem("grammar-vision-state", JSON.stringify(state));

export const cleanStateOnLocalStorage = () => window.localStorage.setItem("grammar-vision-state", undefined);

export const readStateOnLocalStorage = () => JSON.parse(window.localStorage.getItem("grammar-vision-state"));

export const setWindowLocation = location => window.location.href = location;