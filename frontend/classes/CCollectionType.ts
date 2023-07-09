import { TResponseHTTPMethods } from "types/types";
import { ICollectionType, IHTTPMethods } from "~/types/interfaces";
import { CHTTPMethods } from "~/classes";

class CCollectionType implements ICollectionType {
  constructor(private readonly httpMethods: CHTTPMethods) {}
  async getAListOfEntries(url: string): TResponseHTTPMethods {
    return this.httpMethods.get(url);
  }
  async createAnEntry(url: string, body: any) {
    return this.httpMethods.post(url, body);
  }
  async getAnEntry(url: string) {
    return this.httpMethods.get(url);
  }
  async updateAnEntry(url: string, body: any) {
    return this.httpMethods.put(url, body);
  }
  async deleteAnEntry(url: string) {
    return this.httpMethods.delete(url);
  }
}

export { CCollectionType };
