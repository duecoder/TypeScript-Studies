// Singleton - GoF and Factory Method - GoF

export class Database {
  private static database: Database;

  private constructor(private host: string, private user: string, private password: string) { }

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Returning already existent instance;');
      return Database.database;
    }
    console.log('Creating new instance;');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('LocalHost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('LocalHost', 'root', '123456');
db2.connect();

console.log(db1 === db2);
