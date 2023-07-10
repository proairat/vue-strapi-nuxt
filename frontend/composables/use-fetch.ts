import { EHttpMethods } from "~/types/enums";
import { IUseFetchParamsExtended } from "~/types/interfaces";

export function useFetchComposable({
  url,
  urlVar,
  method = EHttpMethods.GET,
  body = null,
  immediate = true,
}: IUseFetchParamsExtended) {
  const { data, pending, refresh, execute, error } = useFetch(urlVar ? `${url}${urlVar}` : url, {
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
