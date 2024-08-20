export const category: Category[] = [
    {
        id: 1,
        name: "Painting",
    },
    {
        id: 2,
        name: "Watercolor",
    }
]

export interface Category {
    id? : number,
    name? : string,
}