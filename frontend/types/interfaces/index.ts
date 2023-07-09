import { AsyncData } from "nuxt/app";
import { AsyncDataExecuteOptions } from "nuxt/dist/app/composables/asyncData";
import { FetchError } from "ofetch/node";
import { TResponseHTTPMethods } from "types/types";

interface ITableHeaderCar {
  id: number;
  name: string;
}

interface ITableDataCar {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface IHTTPMethods {
  get(url: string): TResponseHTTPMethods;
  post(url: string, body: any): TResponseHTTPMethods;
  put(url: string, body: any): TResponseHTTPMethods;
  delete(url: string): TResponseHTTPMethods;
}

interface ICStrapi {
  collectionGetList(url: string):TResponseHTTPMethods;
  collectionCreate(url: string, body: any): TResponseHTTPMethods;
  collectionGetEntry(url: string): TResponseHTTPMethods;
  collectionUpdateEntry(url: string, body: any): TResponseHTTPMethods;
  collectionDeleteEntry(url: string): TResponseHTTPMethods;
  singleGet(url: string): TResponseHTTPMethods;
  singleUpdate(url: string; body: any): TResponseHTTPMethods;
  singleDelete(url: string): TResponseHTTPMethods;
}

interface ICollectionType {
  getAListOfEntries(url: string): TResponseHTTPMethods;
  createAnEntry(url: string, body: any): TResponseHTTPMethods;
  getAnEntry(url: string): TResponseHTTPMethods;
  updateAnEntry(url: string, body: any): TResponseHTTPMethods;
  deleteAnEntry(url: string): TResponseHTTPMethods;
}

interface ISingleType {
  getAnEntry(url: string): TResponseHTTPMethods;
  updateCreateAnEntry(url: string, body: any): TResponseHTTPMethods;
  deleteAnEntry(url: string): TResponseHTTPMethods;
}

export type { 
  ITableHeaderCar, 
  ITableDataCar, 
  IHTTPMethods, 
  ICStrapi,
  ICollectionType,
  ISingleType,
};
