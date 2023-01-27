import fs from "fs";
import path from "path";
import readline from "readline";

const p1 = async () => {
  const fileStream = fs.createReadStream(path.join(__dirname, "input.txt"));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    for (let i = 0; i <= line.length; i += 1) {
      const marker = new Set(line.slice(i, i + 4));
      if (marker.size === 4) {
        return i + 4;
      }
    }
  }
};

export default p1;
