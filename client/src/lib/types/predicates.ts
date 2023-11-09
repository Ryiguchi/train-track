import { CombinedError } from '@urql/vue';
import { AxiosError } from 'axios';
import type { ZodError } from 'zod';

export function isZodError(
  error: CombinedError | ZodError | Error | AxiosError
): error is ZodError {
  return (error as ZodError).errors !== undefined;
}

export function isNetworkError(
  error: CombinedError | ZodError | Error | AxiosError
): error is CombinedError {
  return (error as CombinedError).networkError?.message !== undefined;
}

export function isGraphQlError(
  error: CombinedError | ZodError | Error | AxiosError
): error is CombinedError {
  return (error as CombinedError).graphQLErrors?.length > 0;
}

export function isError(
  error: CombinedError | ZodError | Error | AxiosError
): error is Error {
  return (error as Error).message !== undefined;
}

// export function isAxiosError(error: CombinedError | ZodError | Error | AxiosError): error is AxiosError {
//   return (error as AxiosError).
// }

export function isAxiosFailedResponse(
  response: AxiosSuccessResponse | AxiosFailedResponse
): response is AxiosFailedResponse {
  return !(response as AxiosFailedResponse).data.ok;
}
