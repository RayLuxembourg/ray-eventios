export const loadUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (user === null) {
      return undefined;
    }
    return JSON.parse(user);
  } catch (err) {
    return undefined;
  }
};

export const saveUser = user => {
  try {
      const userString = JSON.stringify(user);
      localStorage.setItem("user",userString);
  } catch (err) {
    
  }
};
