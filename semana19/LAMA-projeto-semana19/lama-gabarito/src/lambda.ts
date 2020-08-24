import app from "./index";
import serverlerss from "serverless-http";
import "mysql";

export const handler = serverlerss(app);
