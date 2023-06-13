export function priceCalculator(profit, quantity, sacrifice) {
  profit = Number(profit);
  quantity = Number(quantity);
  sacrifice = Number(sacrifice);

  if (isNaN(profit) || isNaN(quantity) || isNaN(sacrifice)) {
    console.warn("One of the arguments in priceCalculator is NaN:", {
      profit,
      quantity,
      sacrifice,
    });
    return NaN;
  }

  let quantityMultiplier = 0.1 + quantity / 100;
  let multiplier = 10 + quantity * quantityMultiplier;

  let finalResult = profit * multiplier * (quantity === 10 ? 10 : 1);
  if (sacrifice > 0) {
    finalResult += finalResult * (sacrifice / 2);
  }

  return finalResult;
}
