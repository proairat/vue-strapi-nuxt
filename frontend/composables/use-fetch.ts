import { EHttpMethods } from "~/types/enums";

export function useFetchComposable({
  url,
  urlVar,
  method = EHttpMethods.GET,
  body = null,
  immediate = true,
}: {
  url: string;
  urlVar?: string;
  method?: EHttpMethods;
  body?: BodyInit | null;
  immediate?: boolean | undefined;
}) {
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
