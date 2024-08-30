import { AtpAgent } from "@atproto/api";
import { useHandleApi } from "./api/api";
import * as process from "process";
import * as dotenv from "dotenv";
import { CronJob } from "cron";
dotenv.config();

const agent = new AtpAgent({
  service: "https://bsky.social",
});

async function main() {
  await agent.login({
    identifier: process.env.AT_IDENTIFIER!,
    password: process.env.AT_PASSWORD!,
  });

  const quote = await useHandleApi();
  await agent.post({
    text: `"${quote}"`,
  });
  console.log("just posted!");
}

main();

const scheduleExpressionMinute = "* * * * *";
const scheduleExpression = "0 */6 * * *";

const job = new CronJob(scheduleExpression, main);

job.start();
