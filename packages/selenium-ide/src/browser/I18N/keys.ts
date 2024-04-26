import en, { LanguageMap } from './en'

const processOneLevel = (
  prefix: string,
  obj: LanguageMap
): LanguageMap => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const keyPath = `${prefix}.${key}`;
    if (typeof value === 'string') {
      // @ts-expect-error - we know this is a string
      acc[key] = keyPath;
    } else {
      // @ts-expect-error - we know this is an object
      acc[key] = processOneLevel(keyPath, value);
    }
    return acc;
  }, {} as LanguageMap);
}

/**
 * Take this nested object, keep the shape, but make the final keys the dot delimited string
 * path of the nested key
 */
export default processOneLevel('en', en)