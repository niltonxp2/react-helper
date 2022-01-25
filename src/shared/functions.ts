type GenericObject = { [key: string]: any };

export const removeNullValues = (payload: GenericObject) => {
  const clonePayload = JSON.parse(JSON.stringify(payload));

  function removeNulls(obj: GenericObject) {
    const isArray = obj instanceof Array;
    for (const k in obj) {
      if (obj[k] === null) isArray ? obj.splice(+k, 1) : delete obj[k];
      else if (typeof obj[k] == 'object') removeNulls(obj[k]);
    }
  }

  removeNulls(clonePayload);

  return clonePayload;
};
