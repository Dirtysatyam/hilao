import { Client } from "porn-x";
import fs from "fs";
let names=[
    "Aaliyah Hadid",
    "Zuzana Zeleznovova"
  ]
const client = new Client();



const fetchDataForName = async (name) => {
  try {
    const information = await client.getInformation(name);
    const gifResult = await client.getGif(name);
    const imagesResult = await client.getImages(name);
    const shortVideosResult = await client.getShortVideos(name);

    return {
      name,
      information,
      section1: gifResult.gifs,
      section2: imagesResult.images,
      section3: shortVideosResult,
    };
  } catch (error) {
    console.error(`Error fetching data for ${name}:`, error);
    return null;
  }
};

const fetchDataForAllNames = async () => {
  const allData = [];

  for (const name of names) {
    const data = await fetchDataForName(name);
    if (data) {
      allData.push(data);
      console.log(name+' has been saved');
    }
  }

  return allData;
};

const saveDataToFile = (data, filePath) => {
  const dataToSave = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, dataToSave);
  console.log(`Result saved to ${filePath}`);
};

const main = async () => {
  const allData = await fetchDataForAllNames();

  // Save all data to a single file
  saveDataToFile(allData, "allData.json");
};

// Run the script
main();
