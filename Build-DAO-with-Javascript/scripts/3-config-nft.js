import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x066fb6A538f09d49f506f26D267fBd87a1B7600F");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Fron on stool",
        description: "This NFT will give you access to FrogDAO!",
        image: readFileSync("scripts/assets/frog.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();