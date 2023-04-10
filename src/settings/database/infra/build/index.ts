import { client } from "../../index";

client.connect();

client.query({
    sql: /*sql*/`
        CREATE TABLE  "tb_user" (
            "id" SERIAL PRIMARY KEY,
            "first_name" VARCHAR(20) NOT NULL,
            "last_name" VARCHAR(20) NOT NULL,
            "email" VARCHAR(30) NOT NULL UNIQUE,
            "password" VARCHAR NOT NULL
        );

        CREATE TABLE "tb_service" (
            "id" SERIAL PRIMARY KEY,
            "title" VARCHAR(30) NOT NULL,
            "description" TEXT NOT NULL,
            "user_id" INTEGER REFERENCES tb_user("id")
        );
    `,
    
}).then(() => {
    console.log("created all...");
});

client.disconnect();