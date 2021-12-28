export const removeNullValues = (payload: any) => {
  const clonePayload = JSON.parse(JSON.stringify(payload));

  function removeNulls(obj: any) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
      if (obj[k] === null) isArray ? obj.splice(k, 1) : delete obj[k];
      else if (typeof obj[k] == 'object') removeNulls(obj[k]);
    }
  }

  removeNulls(clonePayload);

  return clonePayload;
};
