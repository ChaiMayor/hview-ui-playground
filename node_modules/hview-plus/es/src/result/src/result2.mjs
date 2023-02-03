const t = {
  title: {
    type: String,
    default: ""
  },
  subTitle: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    values: ["success", "warning", "info", "error"],
    default: "info"
  }
};
export {
  t as ResultProps
};
