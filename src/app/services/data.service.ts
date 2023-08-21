import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SortDirection } from '@angular/material/sort';
import { DataApiResult } from '../types/types';

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private readonly _httpClient: HttpClient) { }

    getRepoIssues(sort: string, order: SortDirection, page: number, size: number): Observable<DataApiResult> {
        const href = 'https://retoolapi.dev/uOTx4y/data-for-table';
        const requestUrl = `${href}?_sort=${sort}&_order=${order}&_page=${page + 1}&_limit=${size}`;

        return this._httpClient.get<DataApiResult>(requestUrl);
    }
}