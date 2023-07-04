import { EHttpMethods } from "~/types/enums";

export function useFetchComposable({
  url,
  urlVar,
  method = EHttpMethods.GET,
  body = null,
}: {
  url: string;
  urlVar?: string;
  method?: EHttpMethods;
  body?: BodyInit | null;
}) {
  const { data, pending, refresh, execute, error } = useFetch(urlVar ? `${url}${urlVar}` : url, {
    method,
    body,
  });

  return {
    data,
    pending,
    refresh,
    execute,
    error,
  };
}
