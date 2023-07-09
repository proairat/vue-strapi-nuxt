import { AsyncDataExecuteOptions } from "nuxt/dist/app/composables/asyncData";
import { FetchError } from "ofetch/node";

type TResponseHTTPMethods = Promise<{
  data: globalThis.Ref<unknown>;
  pending: globalThis.Ref<boolean>;
  refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;
  execute: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;
  error: globalThis.Ref<FetchError<any> | null>;
}>;

export type { TResponseHTTPMethods };
