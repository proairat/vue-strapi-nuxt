import { EHttpMethods } from "~/types/enums";
import { TResponseHTTPMethods } from "~/types/types";

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
  get(useFetchParams: IUseFetchParamsBase & IUseFetchParamsUrlVarOptional): TResponseHTTPMethods;
  post(useFetchParams: IUseFetchParamsBase & IUseFetchParamsPostBody): TResponseHTTPMethods;
  put(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsPutBody & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods;
  delete(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsDelete & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods;
}

interface ICStrapi {
  collectionGetList(useFetchParams: IUseFetchParamsBase): TResponseHTTPMethods;
  collectionCreate(useFetchParams: IUseFetchParamsBase & IUseFetchParamsPostBody): TResponseHTTPMethods;
  collectionGetEntry(useFetchParams: IUseFetchParamsBase & IUseFetchParamsUrlVarRequired): TResponseHTTPMethods;
  collectionUpdateEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsPutBody & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods;
  collectionDeleteEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsDelete & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods;
  singleGet(url: string): TResponseHTTPMethods;
  singleUpdate(url: string, body: any): TResponseHTTPMethods;
  singleDelete(url: string): TResponseHTTPMethods;
}

interface ICollectionType {
  getAListOfEntries(useFetchParams: IUseFetchParamsBase): TResponseHTTPMethods;
  createAnEntry(useFetchParams: IUseFetchParamsBase & IUseFetchParamsPostBody): TResponseHTTPMethods;
  getAnEntry(useFetchParams: IUseFetchParamsBase & IUseFetchParamsUrlVarRequired): TResponseHTTPMethods;
  updateAnEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsPutBody & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods;
  deleteAnEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsDelete & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods;
}

interface ISingleType {
  getAnEntry(url: string): TResponseHTTPMethods;
  updateCreateAnEntry(url: string, body: any): TResponseHTTPMethods;
  deleteAnEntry(url: string): TResponseHTTPMethods;
}

interface IUseFetchParamsBase {
  url: string;
  immediate?: boolean | undefined;
}

interface IUseFetchParamsUrlVarRequired {
  urlVar: string;
}

interface IUseFetchParamsUrlVarOptional {
  urlVar?: string;
}

interface IUseFetchParamsPutBody {
  method: EHttpMethods.PUT;
  body: any;
}

interface IUseFetchParamsPostBody {
  method: EHttpMethods.POST;
  body: any;
}

interface IUseFetchParamsDelete {
  method: EHttpMethods.DELETE;
}

interface IUseFetchParamsExtended extends IUseFetchParamsBase, IUseFetchParamsUrlVarOptional {
  method?: EHttpMethods;
  body?: BodyInit | null;
}

export type {
  ITableHeaderCar,
  ITableDataCar,
  IHTTPMethods,
  ICStrapi,
  ICollectionType,
  ISingleType,
  IUseFetchParamsBase,
  IUseFetchParamsUrlVarRequired,
  IUseFetchParamsUrlVarOptional,
  IUseFetchParamsPutBody,
  IUseFetchParamsPostBody,
  IUseFetchParamsDelete,
  IUseFetchParamsExtended,
};
