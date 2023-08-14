import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default (on, config) => {
  allureWriter(on, config);
  return config;
}