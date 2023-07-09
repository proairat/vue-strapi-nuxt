enum EHttpMethods {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  CONNECT = "CONNECT",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  PATCH = "PATCH",
}

enum EStrapiFields {
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  publishedAt = "publishedAt",
}

enum ResponseCode {
  Success = 200,
  NotFound = 404,
  InternalServerError = 500,
}

export { EHttpMethods, EStrapiFields, ResponseCode };
