export class UserEntity {
	id: number = 0;

	firstName: string = "";

	lastName: string = "";

	email: string = "";

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}
