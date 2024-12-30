import { EDirectionSort } from "@/enums/common/common";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export interface IQueries {
    limit: string;
    page: string;
    sortBy: string;
    sortDir: string | EDirectionSort;
    searchBy: string;
    searchVal: string;
    isDeleted: string | boolean;
    [key: string]: string | number | boolean;
}

export interface IBaseResponse<T> {
    message: string;
    metadata?: T;
    statusCode?: StatusCodes;
    reasonStatusCode?: ReasonPhrases;
}

export interface IErrorResponse {
    path: string;
    error: string;
    message: string;
    statusCode: number;
    timestamp: string;
}

export interface IGetManyItem<T> {
    totalItems: number;
    items: Array<T>;
}
