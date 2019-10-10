import { HTTPError, fetch } from "utilities/api"

test("fetch allows a simple GET without throwing an error", async () => {
  await fetch("https://utilities.mads.dev/v1/ip")
})

test("fetch allows", async () => {
  await fetch("https://utilities.mads.dev/v1/status/412")
    .then(() => {
      throw new Error("did not catch an error")
    })
    .catch(err => {
      expect(err).toBeInstanceOf(HTTPError)
    })
})
