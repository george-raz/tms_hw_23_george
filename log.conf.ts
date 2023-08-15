import * as log4js from "log4js";
log4js.configure({
    appenders: { tests: { type: "file", filename: "tests.log" } },
    categories: { default: { appenders: ["tests"], level: "error" } },
});

const logger = log4js.getLogger();
logger.level = "debug";

export function isEnabledMessageLog(locator: string) {
    logger.debug(`I check if element located ${locator} is enabled`);
}

export function clickMessageLog(locator: string) {
    logger.debug(`I click element located ${locator}`);
}

export {
    logger
}