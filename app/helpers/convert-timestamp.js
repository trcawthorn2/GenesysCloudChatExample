import { helper } from '@ember/component/helper';

export function convertTimestamp(params/*, hash*/) {
  return new Date(params[0]).toLocaleString();
}

export default helper(convertTimestamp);
