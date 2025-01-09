export default class Environment {
  getEnvironment() {
    let env = Cypress.env("env")
    if (env === "testing") {
      return Cypress.config(
        "baseUrl",
        "https://simple-grocery-store-api-testing.glitch.me"
      )
    } else if (env === "prod") {
      return Cypress.config(
        "baseUrl",
        "https://simple-grocery-store-api.glitch.me" 
      )
    }
  }
}
