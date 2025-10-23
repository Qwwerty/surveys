import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    try {
      await this.client.db().command({ ping: 1 })
    } catch {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: (collection: any, mongoId: string): any => {
    return Object.assign({}, collection, { id: mongoId })
  }
}
