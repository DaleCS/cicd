require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { Storage } = require("@google-cloud/storage");

const BUCKET_NAME = "cicd_bucket_sample";
const TARGET_PATH = path.resolve(__dirname, "..", "app", "build", "data");

const storageClient = new Storage();

async function downloadFile() {
    const content = await storageClient.bucket(BUCKET_NAME).file("sample.json").download();
    fs.writeFileSync(TARGET_PATH + "/sample.json", content.toString());
}

downloadFile();