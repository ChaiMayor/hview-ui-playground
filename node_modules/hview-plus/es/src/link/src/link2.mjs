const e = ["primary", "success", "info", "warning", "danger"], r = {
  type: {
    type: String,
    validator(n) {
      return e.includes(n);
    }
  },
  disabled: Boolean,
  underline: Boolean
};
export {
  r as LinkProps,
  e as LinkType
};
