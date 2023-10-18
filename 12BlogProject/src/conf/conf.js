//here we can add all the configuration for the project from the .env file as an object
const conf = {
  appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabasetId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),



}

export default conf