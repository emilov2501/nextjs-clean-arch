import { Expose } from "class-transformer"

export class UserEntity {
  id: number = 9999999

  firstName = ''

  lastName = ''

  @Expose({name: "maidenName"})
  middleName = ''

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}