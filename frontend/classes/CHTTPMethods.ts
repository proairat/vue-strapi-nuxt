import { TResponseHTTPMethods } from "~/types/types";
import {
  IHTTPMethods,
  IUseFetchParamsBase,
  IUseFetchParamsPostBody,
  IUseFetchParamsPutBody,
  IUseFetchParamsDelete,
  IUseFetchParamsUrlVarOptional,
  IUseFetchParamsUrlVarRequired,
} from "~/types/interfaces";

class CHTTPMethods implements IHTTPMethods {
  async get({ url, urlVar, immediate }: IUseFetchParamsBase & IUseFetchParamsUrlVarOptional): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({ url, urlVar, immediate });

    return {
      data,
      pending,
      refresh,
      execute,
      error,
    };
  }

  async post({ url, method, body, immediate }: IUseFetchParamsBase & IUseFetchParamsPostBody): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({
      url,
      method,
      body,
      immediate,
    });
    return {
      data,
      pending,
      refresh,
      execute,
      error,
    };
  }

  async put({
    url,
    urlVar,
    method,
    body,
    immediate,
  }: IUseFetchParamsBase & IUseFetchParamsPutBody & IUseFetchParamsUrlVarRequired): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({
      url,
      urlVar,
      method,
      body,
      immediate,
    });
    return {
      data,
      pending,
      refresh,
      execute,
      error,
    };
  }

  async delete({
    url,
    urlVar,
    method,
    immediate,
  }: IUseFetchParamsBase & IUseFetchParamsDelete & IUseFetchParamsUrlVarRequired): TResponseHTTPMethods {
    const { data, pending, refresh, execute, error } = useFetchComposable({
      url,
      urlVar,
      method,
      immediate,
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
