import xior, { XiorInstance, XiorRequestConfig } from "xior";

export type HttpInstance = XiorInstance;

export function createInstance(baseURL: string, options?: XiorRequestConfig) {
	return xior.create({
    ...options,
		baseURL,
	});
}
