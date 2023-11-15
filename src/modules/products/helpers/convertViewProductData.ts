import { IProductEdit, IProductView } from '../types';

export const convertViewProductData = (
  data?: IProductView | null,
): Partial<IProductEdit> => {
  if (!data) {
    return {
      ableToLicenceTransfer: false,
      ableToCreateTrialLicence: false,
      status: 'DRAFT',
      memoryElementIds: [],
    };
  }

  return {
    componentIds: data.components.map((el) => el.id),
    memoryElementIds: data.memoryElements.map((el) => el.id),
    id: data.id,
    number: data.number,
    name: data.name,
    description: data.description,
    status: data.status,
    ableToLicenceTransfer: data.ableToLicenceTransfer,
    ableToCreateTrialLicence: data.ableToCreateTrialLicence,
  };
};
