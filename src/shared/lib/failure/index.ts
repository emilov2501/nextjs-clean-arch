enum FailureType {
	ServerError = "SERVER_ERROR",
	NotFound = "NOT_FOUND",
	Unauthorized = "UNAUTHORIZED",
	ValidationError = "VALIDATION_ERROR",
	UnexpectedError = "UNEXPECTED_ERROR",
}

export abstract class Failure extends Error {
	abstract readonly type: FailureType;

	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype); // Fix prototype chain
	}
}

export class ServerErrorFailure extends Failure {
	readonly type = FailureType.ServerError;

	constructor(message = "Ошибка сервера") {
		super(message);
	}
}

export class NotFoundFailure extends Failure {
	readonly type = FailureType.NotFound;

	constructor(message = "Не найдено") {
		super(message);
	}
}

export class UnauthorizedFailure extends Failure {
	readonly type = FailureType.Unauthorized;

	constructor(message = "Нет доступа") {
		super(message);
	}
}

export class ValidationErrorFailure extends Failure {
	readonly type = FailureType.ValidationError;
	readonly details: Record<string, string>;

	constructor(details: Record<string, string>) {
		super("Ошибка валидации");
		this.details = details;
	}
}

export class UnexpectedErrorFailure extends Failure {
	readonly type = FailureType.UnexpectedError;

	constructor(error: unknown) {
		super(error instanceof Error ? error.message : String(error));
	}
}
