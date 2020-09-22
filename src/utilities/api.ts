/**
 * The API module that implements the interface for sending http requests.
 *
 * @module utilities/api
 */

/**
 * This contains information about the HTTP response
 *
 * body will be pre-populated with JSON if the parser is successful.
 */
interface IHTTPResponse<T> {
  /** The underlying HTTP response */
  response: Response

  /** The pre-parsed JSON response body */
  body?: T
}

/**
 * Used to represent an HTTP response outside the range of 200 - 299
 *
 * @extends Error
 */
class HTTPError extends Error {
  /** The HTTP status code that triggered the error */
  public code: number

  /** The HTTP response that triggered the error */
  public response: Response

  /**
   * Create a new HTTP error
   *
   * @param response The underlying response that was not successful.
   */
  constructor(response: Response) {
    super(`HTTP Error: ${response.status}`)

    this.response = response
    this.code = response.status
  }
}

async function send<T>(
  request: RequestInfo,
  init?: RequestInit | undefined
): Promise<IHTTPResponse<T>> {
  const response = await fetch(request, init)

  if (response.status < 200 || response.status >= 300) {
    throw new HTTPError(response)
  }

  let body = null
  try {
    body = await response.json()
  } catch (e) {
    if (e instanceof SyntaxError) {
      body = null
    } else {
      throw e
    }
  }

  return Promise.resolve({ response, body })
}

export {
  /**
   * Send a HTTP request and check the response is a 2xx response status code.
   *
   * The body will be parsed as JSON by default and returned pre-parsed in the
   * response's body property.
   *
   * @param request The HTTP request to send
   */
  send as fetch,
  HTTPError,
}
