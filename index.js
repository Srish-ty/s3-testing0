import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

// Set the AWS credentials and region
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME || "";

const testS3Credentials = async () => {
  try {
    const data = await s3.listObjectsV2({ Bucket: bucketName }).promise();
    console.log("S3 Bucket Contents:", data);
  } catch (error) {
    console.error("Error accessing S3:", error);
  }
};

// Call the function to test
testS3Credentials();
