function orders(product, count) {
    let totalPriceOfProduct = 0;

    switch (product) {
        case "coffee": totalPriceOfProduct = 1.50 * count
            break;
        case 'coke': totalPriceOfProduct = 1.40 * count
            break;
        case 'water': totalPriceOfProduct = 1.00 * count
            break;
        case "snacks": totalPriceOfProduct = 2.00 * count
            break;
    
    }
    console.log(totalPriceOfProduct.toFixed(2));
}
orders("coffee", 2)