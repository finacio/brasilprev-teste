export interface cards {
    cards: Array<card>
}

interface card {
    id: string,
    name: string,
    imageUrl: string,
    types: Array<any>
}
