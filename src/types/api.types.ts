export type ApiQuery = undefined | string;

export interface IMovieData {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface ICharacterData {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}

export interface IAPIResponse {
  docs: IMovieData[] | ICharacterData[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
