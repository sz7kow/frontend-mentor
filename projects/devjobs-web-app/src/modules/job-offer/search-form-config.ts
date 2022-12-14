export interface SearchValues {
  position: string;
  location: string;
  isFullTime: boolean;
}

export const initialSearchValues: SearchValues = {
  isFullTime: false,
  location: '',
  position: '',
};
