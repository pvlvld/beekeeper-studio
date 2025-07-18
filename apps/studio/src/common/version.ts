import _ from "lodash";

export interface Version {
  major: number;
  minor: number;
  patch: number;
}

/**
 * Usage:
 *
 * ```
 * const v1 = parseVersion('5.1.0')
 * console.log(v1.major, v1.minor, v.patch)
 * ```
 **/
export function parseVersion(version: string) {
  const versionTagRegex = /^v?(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:\.\d+)*?(?:-[0-9A-Za-z.-]+)?$/;
  const match = versionTagRegex.exec(version) || [];
  const [major, minor, patch] = _.tail(match).slice(0, 3).map((x) => parseInt(x ?? '0'));
  return { major, minor, patch };
}

/** Check if version a is less than or equal to version b */
export function isVersionLessThanOrEqual(a: Version, b: Version) {
  if (a.major > b.major) return false
  if (a.major === b.major) {
    if (a.minor > b.minor) return false;
    if (a.minor === b.minor && a.patch > b.patch) return false
    return true
  } else { // a.major < b.major
    return true
  }

}

