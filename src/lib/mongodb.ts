import { MongoClient, MongoClientOptions } from 'mongodb';

// Correct the MongoDB URI
const uri = "mongodb+srv://koa-studio:CVbn12345@koa.xbpyp.mongodb.net/?retryWrites=true&w=majority&appName=KOA";

// Initialize MongoClient and clientPromise
let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("Please add your Mongo URI to the environment variables");
}

// In development mode, use a global variable to prevent multiple connections
if (process.env.NODE_ENV === 'development') {
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri);
        (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
} else {
    // In production, always create a new MongoClient instance
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
