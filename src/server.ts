import { Server } from "./app";

async function main() {
    const app = new Server(3000);
    await app.listen();
}
main();