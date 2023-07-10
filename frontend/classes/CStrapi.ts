import {
  ICStrapi,
  IUseFetchParamsBase,
  IUseFetchParamsDelete,
  IUseFetchParamsPostBody,
  IUseFetchParamsPutBody,
  IUseFetchParamsUrlVarRequired,
} from "~/types/interfaces";
import { CCollectionType, CHTTPMethods, CSingleType } from "~/classes";
import { TResponseHTTPMethods } from "types/types";

class CStrapi implements ICStrapi {
  constructor(private readonly collectionType: CCollectionType, private readonly singleType: CSingleType) {}
  async collectionGetList(useFetchParams: IUseFetchParamsBase): TResponseHTTPMethods {
    return this.collectionType.getAListOfEntries(useFetchParams);
  }
  async collectionCreate(useFetchParams: IUseFetchParamsBase & IUseFetchParamsPostBody): TResponseHTTPMethods {
    return this.collectionType.createAnEntry(useFetchParams);
  }
  async collectionGetEntry(useFetchParams: IUseFetchParamsBase & IUseFetchParamsUrlVarRequired): TResponseHTTPMethods {
    return this.collectionType.getAnEntry(useFetchParams);
  }
  async collectionUpdateEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsPutBody & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods {
    return this.collectionType.updateAnEntry(useFetchParams);
  }
  async collectionDeleteEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsDelete & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods {
    return this.collectionType.deleteAnEntry(useFetchParams);
  }
  // нижележащие методы также требуют изменения, по образу и подобию верхнележащих методов
  async singleGet(url: string): TResponseHTTPMethods {
    return this.singleType.getAnEntry(url);
  }
  async singleUpdate(url: string, body: any): TResponseHTTPMethods {
    return this.singleType.updateCreateAnEntry(url, body);
  }
  async singleDelete(url: string): TResponseHTTPMethods {
    return this.singleType.deleteAnEntry(url);
  }
}

const StrapiMethods = new CStrapi(new CCollectionType(new CHTTPMethods()), new CSingleType(new CHTTPMethods()));

export { StrapiMethods };
