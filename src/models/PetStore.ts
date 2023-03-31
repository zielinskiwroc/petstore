export interface Info {
  title: string;
  contact: {
    email: string;
  };
  version: string;
}

export type HttpMethod = "get" | "post" | "put" | "delete";

export interface Parameter {
  description: string;
  in: string;
  name: string;
  required: boolean;
}

export interface Response {
  description: string;
}

export type Responses = Record<string, Response>;
export interface ApiDetails {
  parameters: Parameter[];
  responses: Responses;
}

export type Path = { [key in HttpMethod]?: ApiDetails };

export interface Paths {
  [key: string]: Path;
}

export interface Tag {
  name: string;
}

export interface PetStore {
  info: Info;
  paths: Paths;
  tags: Tag[];
}
