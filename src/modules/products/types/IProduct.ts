import { EProductStatus } from '../constants/EProductStatus';

export interface IProductBase {
  id?: string;
  number: number;
  name: string;
  description: string;
  status: keyof typeof EProductStatus;
  ableToLicenseTransfer: boolean;
  ableToCreateTrialLicense: boolean;
}

export interface IProductView extends IProductBase {
  components: any[];
  memoryElements: any[];
}

export interface IProductEdit extends IProductBase {
  componentIds: string[];
  memoryElementIds: string[];
}

export type TProductDataKeys = keyof IProductBase;
