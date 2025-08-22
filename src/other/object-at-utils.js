import { get } from './object-access-utils';

export const at = (object, ...paths) => {
  const flattenedPaths = paths.flat();
  return flattenedPaths.map(path => get(object, path));
};
