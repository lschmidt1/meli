const users = {
  4: { name: "Mark" },
  5: { name: "Paul" },
};

export function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr("/users/".length), 10);
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: "User with " + userID + " not found.",
          })
    );
  });
}

export const product = {
  id: 1,
  title: "producto",
  price: {
    currency: "ARS",
    amount: 9999,
    decimals: 1,
  },
  picture: "item.thumbnail",
  condition: "item.condition",
  free_shipping: "item.shipping.free_shipping",
};

export const categories = ["1", "2", "3"];
