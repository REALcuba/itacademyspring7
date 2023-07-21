export type Project = {
    id?: `${string}-${string}-${string}-${string}-${string}`
    projectName: string,
    clientName: string,
    service: (string |null)[],
    totalPages: number,
    totalLanguages: number,
    totalPrice: number,
    date: string
}