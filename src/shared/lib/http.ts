import xior, { XiorInstance } from "xior";

export type HttpInstance = XiorInstance

export const v1 = xior.create({
  baseURL: 'https://dummyjson.com'
})