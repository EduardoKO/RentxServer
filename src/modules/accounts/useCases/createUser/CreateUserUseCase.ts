import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs';

import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    const hashedPassword = await hash(password, 8)

    await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      driver_license
    })
  }
}

export default CreateUserUseCase;