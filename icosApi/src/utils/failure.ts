import buildResponse from "./buildResponse"

export default (body: any) => {
  return buildResponse(404, body)
}