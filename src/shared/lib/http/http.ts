import xior, { XiorInstance } from "xior";

export type HttpInstance = XiorInstance;

export function createInstance(baseURL: string) {
	return xior.create({
		baseURL,
	});
}
