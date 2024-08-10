import api from "./api";

export async function getProducts() {
    return api.get('/api/products/');
}

export async function getProduct(id) {
    return api.get(`/api/products/${id}`);
}

export async function selectProduct(params) {
    return api.post('/api/products/select', params);
}

export async function searchProducts(searchString) {
    return api.get(`/api/products/search?q=${searchString}`);
}
