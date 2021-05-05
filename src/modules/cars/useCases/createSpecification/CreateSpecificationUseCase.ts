import { inject, injectable } from "tsyringe";
import Specification from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name:string;
  description:string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({name, description}: IRequest): Promise<Specification> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error('Specification already exists')
    }

    const specification = await this.specificationsRepository.create({
      name,
      description
    });

    return specification
  }
}

export default CreateSpecificationUseCase;
