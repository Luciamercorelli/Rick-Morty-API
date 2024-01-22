// Generated by https://quicktype.io

export interface InfoAPI {
  info: Info;
  results: Episode[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Character {
    id:       number;
    name:     string;
    status:   CharacterStatus;
    species:  string;
    type:     string;
    gender:   CharacterGender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export interface Location {
    name: string;
    url:  string;
}

export enum CharacterStatus {
    Alive = "Alive",
    Dead = "Dead",
    Unknow = "Unknown",
}

export enum CharacterGender {
    Male = "Male",
    Female = "Female",
    Unknown = "Unknown",
}