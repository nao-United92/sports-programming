export const noop = () => {};

export const identity = (value) => value;

export const constant = (value) => () => value;
