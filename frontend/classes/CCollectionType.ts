import { TResponseHTTPMethods } from "types/types";
import {
  ICollectionType,
  IUseFetchParamsBase,
  IUseFetchParamsPostBody,
  IUseFetchParamsPutBody,
  IUseFetchParamsDelete,
  IUseFetchParamsUrlVarRequired,
} from "~/types/interfaces";
import { CHTTPMethods } from "~/classes";

class CCollectionType implements ICollectionType {
  constructor(private readonly httpMethods: CHTTPMethods) {}
  async getAListOfEntries(useFetchParams: IUseFetchParamsBase): TResponseHTTPMethods {
    return this.httpMethods.get(useFetchParams);
  }
  async createAnEntry(useFetchParams: IUseFetchParamsBase & IUseFetchParamsPostBody): TResponseHTTPMethods {
    return this.httpMethods.post(useFetchParams);
  }
  async getAnEntry(useFetchParams: IUseFetchParamsBase & IUseFetchParamsUrlVarRequired): TResponseHTTPMethods {
    return this.httpMethods.get(useFetchParams);
  }
  async updateAnEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsPutBody & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods {
    return this.httpMethods.put(useFetchParams);
  }
  async deleteAnEntry(
    useFetchParams: IUseFetchParamsBase & IUseFetchParamsDelete & IUseFetchParamsUrlVarRequired
  ): TResponseHTTPMethods {
    return this.httpMethods.delete(useFetchParams);
  }
}

export { CCollectionType };
