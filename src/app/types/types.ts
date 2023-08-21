export type DataApiResult = DataApiItem[];

export interface DataApiItem {
    id: number;
    job: string;
    name: string;
    rating: number;
    account: number;
    company: string;
}