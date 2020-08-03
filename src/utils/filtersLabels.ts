export const LOCALE = 'locale';
export const COUNTRY = 'country';
export const TIMESTAMP = 'timestamp';
export const LIMIT = 'limit';
export const OFFSET = 'offset';

export interface FiltersType { 
  labels: Array<Filter>
};

export interface Filter {
  id: typeof LOCALE | typeof COUNTRY | typeof TIMESTAMP | typeof LIMIT | typeof OFFSET,
  name: string,
  values?: Array<FilterOptions>,
  validation?: Array<FilterValidation>
};

export interface FilterOptions {
  value: string,
  name: string
};

export interface FilterValidation {
  primitiveType: string,
  max?: number,
  min?: number,
  entityType?: string,
  pattern?: string
};