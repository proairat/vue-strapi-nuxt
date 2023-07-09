import { BASE_URL_GET_CARS } from "api";
import { TResponseHTTPMethods } from "~/types/types";
import { IHTTPMethods } from "~/types/interfaces";

class CHTTPMethods implements IHTTPMethods {
  async get(url: string): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({
      url,
    });

    console.log("CHTTPMethods.get data", data);
    console.log("CHTTPMethods.get pending", pending);
    console.log("CHTTPMethods.get refresh", refresh);
    console.log("CHTTPMethods.get execute", execute);
    console.log("CHTTPMethods.get error", error);

    return {
      data,
      pending,
      refresh,
      execute,
      error,
    };
  }

  async post(url: string, body: any): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({
      url,
    });

    return {
      data,
      pending,
      refresh,
      execute,
      error,
    };
  }

  async put(url: string, body: any): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({
      url,
    });

    return {
      data,
      pending,
      refresh,
      execute,
      error,
    };
  }

  async delete(url: string): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({
      url,
    });

    return {
      data,
      pending,
      refresh,
      execute,
      error,
    };
  }
}

export { CHTTPMethods };
