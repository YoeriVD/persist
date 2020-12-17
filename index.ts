export function Persist(defaultValue: any) {
  return function (target: Object, propName: string) {
    function getValue(): any {
      const val = localStorage.getItem(propName);
      if (val) return JSON.parse(val);
      return defaultValue;
    }

    function setValue(val: any) {
      localStorage.setItem(propName, JSON.stringify(val));
    }

    Object.defineProperty(target, propName, {
      configurable: true,
      enumerable: true,
      get: getValue,
      set: setValue,
    });
  };
}