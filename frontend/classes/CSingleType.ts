import { TResponseHTTPMethods } from "~/types/types";
import { ISingleType } from "~/types/interfaces";
import { CHTTPMethods } from "~/classes";

class CSingleType implements ISingleType {
  constructor(private readonly httpMethods: CHTTPMethods) {}
  async getAnEntry(url: string): TResponseHTTPMethods {
    return this.httpMethods.get(url);
  }
  async updateCreateAnEntry(url: string, body: any): TResponseHTTPMethods {
    return this.httpMethods.put(url, body);
  }
  async deleteAnEntry(url: string): TResponseHTTPMethods {
    return this.httpMethods.delete(url);
  }
}

export { CSingleType };
