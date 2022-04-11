
export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'people',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'phone', keypath: 'phone', options: { unique: false } },
          { name: 'username', keypath: 'username', options: { unique: true } },
          { name: 'website', keypath: 'website', options: { unique: false } }
        ]
      }
    ]
  };