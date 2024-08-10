export const sortItemsBy = (items, sortByField) => {
    switch (sortByField) {
        case 'price': {
            return items?.sort((a,b) => a.price - b.price);
        }
        case 'stock': {
            return items?.sort((a,b) => a.stock - b.stock);
        }
        case 'name':
        default: {
            return items?.sort((a,b) => a.name.localeCompare(b.name));
        }
    }
};
