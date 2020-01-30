module.exports = {
  env: {
    TESTER: process.env.NODE_ENV === "development" ? "IN DEV" : "IN PROD"
  }
};
