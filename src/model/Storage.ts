export const storage = {
  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item));
    console.log(localStorage)
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    if (item) {
      return JSON.parse(item);
    }
  },

  
};
