const conf = {
     appwriteURl: String(import.meta.env.VITE_APPWRITE_URL),
     appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
     appwriteDatabseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
     appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
     appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;