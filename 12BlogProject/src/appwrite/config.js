import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featureImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log('Appwrite service :: createPost :: error', error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log('Appwrite service :: updatePost :: error', error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log('Appwrite service :: deletePost :: error', error);
      return false;
    }
  }

  //get the individual post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log('Appwrite service :: getPost :: error', error);
      return false;
    }
  }

  //queries must be written inside the [] brackets.
  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log('Appwrite service :: getPosts :: error', error);
      return false;
    }
  }

  //file upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log('Appwrite service :: uploadFile :: error', error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log('Appwrite service :: deleteFile :: error', error);
      return false;
    }
  }

  //get the file preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service; //export the object so we can use them.
