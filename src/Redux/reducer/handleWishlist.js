const wishlist = [];

export const handleWishlist = (state = wishlist, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDWISHLIST":
      const existWishlist = state.find((x) => x.id === product.id);
      if (existWishlist) {
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
    case "DELETEWISHLIST":
      const DeleteWishlist = state.find((x) => x.id === product.id);
      if (DeleteWishlist) {
        if (DeleteWishlist.qty === 1) {
          return state.filter((x) => x.id !== DeleteWishlist.id);
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
