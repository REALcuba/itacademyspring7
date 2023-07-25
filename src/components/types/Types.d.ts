export type MainBoardProps = {
    services: {
        project: string;
        price: number;
    }[];
}
export type CreateProjectProps = {
    projectArr: Project[];
}
export type Project = {
    id?: `${string}-${string}-${string}-${string}-${string}`
    projectName: string,
    clientName: string,
    service: (string |null)[],
    totalPages: number,
    totalLanguages: number,
    totalPrice: number,
    date: string
};
export type FiltersProps = {
    handlerSortProjects: () => void,
    handlerResetBtn: () => void,
    handlerSortByDateFilterBtn: () => void,
    // handlerSearchInput:()=>void,
    handlerInputSearcValue:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
export type CreateProjectProps = {
    projectArr: Project[];
    // isLocaleProjectArr: Project[]
}