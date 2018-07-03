export default function ReduxRedirect({
                                        setInputStateFromLocalstorage,
                                        setTokenStateFromLocalstorage,
                                        readStateOnLocalStorage,
                                        cleanStateOnLocalStorage,
                                        children
                                      }) {

  const {input, token} = readStateOnLocalStorage();;
  setInputStateFromLocalstorage(input);
  setTokenStateFromLocalstorage(token);
  cleanStateOnLocalStorage();

  return children;
}