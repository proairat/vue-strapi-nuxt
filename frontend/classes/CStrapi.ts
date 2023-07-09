import { ICStrapi } from "~/types/interfaces";
import { CCollectionType, CHTTPMethods, CSingleType } from "~/classes";
import { TResponseHTTPMethods } from "types/types";

class CStrapi implements ICStrapi {
  constructor(private readonly collectionType: CCollectionType, private readonly singleType: CSingleType) {}
  async collectionGetList(url: string): TResponseHTTPMethods {
    return this.collectionType.getAListOfEntries(url);
  }
  async collectionCreate(url: string, body: any): TResponseHTTPMethods {
    return this.collectionType.createAnEntry(url, body);
  }
  async collectionGetEntry(url: string): TResponseHTTPMethods {
    return this.collectionType.getAnEntry(url);
  }
  async collectionUpdateEntry(url: string, body: any): TResponseHTTPMethods {
    return this.collectionType.updateAnEntry(url, body);
  }
  async collectionDeleteEntry(url: string): TResponseHTTPMethods {
    return this.collectionType.deleteAnEntry(url);
  }
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
