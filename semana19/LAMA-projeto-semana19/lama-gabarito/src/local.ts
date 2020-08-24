import app from "./index";
import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    console.log(
      `Server listening on http://localhost:${
        (server.address() as AddressInfo).port
      }`
    );
  } else {
    console.log(`Error on running server`);
  }
});
