import { createLogger, transports, format } from 'winston';
const { Logtail } = require("@logtail/node");
const { LogtailTransport } = require("@logtail/winston");

const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN!);

const logger = createLogger({
  level: 'info',
  format: format.combine(
      format.colorize(),
      format.timestamp(),
      format.printf(({ timestamp, level, message, service }) => {
        return `[${timestamp}] ${service} ${level}: ${message}`;
      }),
  ),
  transports: [
      new transports.Console(),
      new LogtailTransport(logtail)
  ],
  defaultMeta: {
    service: 'KreativeHorizonCom',
  },
});

export default logger;
