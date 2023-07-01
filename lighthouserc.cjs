module.exports = {
  ci: {
    upload: {
      target: "lhci",
      serverBaseUrl:
        "http://ec2-18-182-38-106.ap-northeast-1.compute.amazonaws.com:9001",
      // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md#configuration
      token: "46e3eb70-d2c1-44c2-b93f-94e6824509e0",
    },
  },
};
