import { Parameter, PetStore, Responses, Tag } from "../models/PetStore";

export const responsesMocked: Responses = {
  "200": {
    description: "successful operation",
  },
  "400": {
    description: "Invalid status value",
  },
};

export const parametersMocked: Parameter[] = [
  {
    name: "status",
    in: "query",
    description: "Status values that need to be considered for filter",
    required: true,
  },
];

export const tagsMocked: Tag[] = [
  {
    name: "pet",
  },
  {
    name: "store",
  },
  {
    name: "user",
  },
];

export const petStoreMocked: PetStore = {
  info: {
    contact: {
      email: "apiteam@swagger.io",
    },
    version: "1.0.6",
    title: "Swagger Petstore",
  },
  paths: {
    "/pet": {
      get: {
        responses: responsesMocked,
        parameters: parametersMocked,
      },
    },
  },
  tags: tagsMocked,
};
