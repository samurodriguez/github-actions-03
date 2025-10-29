import fs from "fs/promises";

await fs.writeFile("./output.txt", "resultados del procesamiento", "utf-8");
