const { Storage } = require("@google-cloud/storage");

const BUCKET_NAME = "cheap_bucket";
const FILE_NAME = "file.json";

const storageClient = new Storage();

async function downloadFile() {
    const file = await storageClient.bucket(BUCKET_NAME).file(FILE_NAME).download();
    const parsedObject = JSON.parse(file[0]);
    console.log(parsedObject);
}

downloadFile().then(() => {
    console.log("DONE!");
});

console.log("");