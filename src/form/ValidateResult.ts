export interface ValidateResult {
  result: boolean;
  name: string | string[];
  msg?: string;
  items?: Element[];
  value?: string;
}
