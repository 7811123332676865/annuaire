export type Person = {
  login: { uuid: string };
  gender: string;
  name: { first: string; last: string };
  email: string;
  phone: string;
  cell: string;
  dob: { age: number };
  location: { city: string; country: string };
  picture: { large: string };
};

export type PeopleResponse = {
  results: Person[];
  info: { seed: string; results: number; page: number; version: string };
};
