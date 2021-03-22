export interface card {
    card: cardType
}

interface cardType {
    id: string,
    name: string,
    imageUrlHiRes: string,
    supertype: string,
    subtype: string,
    attacks: Array<any>,
    resistances: Array<any>,
    weaknesses: Array<any>,
}
