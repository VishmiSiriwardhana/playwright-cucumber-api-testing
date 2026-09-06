module.exports = {
    default: {
      require: [
        "src/step-definitions/**/*.ts",
        "src/hooks/**/*.ts"
      ],
      requireModule: ["ts-node/register"],
      format: [
        "progress",
        "html:reports/cucumber-report.html"
      ],
      paths: ["features/**/*.feature"],
      publishQuiet: true,
      timeout: 30000
    }
  };