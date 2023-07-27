import app from "./app";
import { getConnection } from "./database";


app.listen(4000);

console.log('server listen on port:',4000);
getConnection();

