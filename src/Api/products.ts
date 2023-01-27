import { instance } from "./base.api";

const protuctsPerPage = 20

export const products = {
    getAll: function ({ initialProd }: { initialProd: number }) {
        return instance.get(`?limit=${protuctsPerPage}&skip=${initialProd}`)
    },
    getById: function ({ id }: { id: string | undefined }) {
        return instance.get(`${id}`)
    },
    getByCategory: function ({ category, limit }: { category: string, limit?: number }) {
        return instance.get(`category/${category}`)
    },
    getBySearched: function ({ searched }: { searched: string }) {
        return instance.get(`search?q=${searched}`)
    }
}