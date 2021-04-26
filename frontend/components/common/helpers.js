export function getPrice(p) {
  let price = "";
  if (p.price) {
    if (p.price.currency === "ARS") {
      price = "$ ";
    } else if (p.price.currency === "USD") {
      price = "U$D ";
    }
    price += p.price.amount
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  return price;
}
