export const calculatePrice = items => {
    return `$${items
        .reduce((acc, item) => acc + item.quanity * item.price, 0)
        .toFixed(2)
     
    }`
}