const cart = [];

export const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const existAddItem = state.find((x) => x.id === product.id);
      if (existAddItem) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
      
    case "DELETEITEM":
      const existDeleteItem = state.find((x) => x.id === product.id);
      if (existDeleteItem) {
        if (existDeleteItem.qty === 1) {
          return state.filter((x) => x.id !== existDeleteItem.id);
        } else {
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
      }
      break;

    default:
      return state;
  }
};
