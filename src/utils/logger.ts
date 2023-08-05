import winston from 'winston';
import 'winston-daily-rotate-file';
const { combine, timestamp, printf, align } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: 'logs/winston.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '7d'
});

export const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A'
    }),
    align(),
    printf((info) => `${info.timestamp} - ${info.level}: ${info.message}`)
  ),
  transports: [fileRotateTransport]
});
