export function notFoundError(resource) {
  return {
    type: "NotFoundError",
    message: `"${resource}" not found!`,
  };
}

export function conflictError(resource) {
  return {
    type: "ConflictError",
    message: `"${resource}" can't be the same!`,
  };
}

export function badRequest(resource) {
  return {
    type: "BadRequestError",
    message: `"${resource}" is not a valid request!`,
  };
}

export function internalServerError(resource) {
  return {
    type: "InternalServerError",
    message: `An unexpected server error occurred "${resource}"`,
  };
}

export function unprocessableEntity(resource) {
  return {
    type: "UnprocessableEntityError",
    message: `"${resource}" is not valid!`,
  };
}
