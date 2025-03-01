import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EventOrganizers extends BaseSchema {
  protected tableName = 'event_organizers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id').notNullable()
      table.integer('event_id').unsigned().references('events.id').notNullable()
      table.unique(['user_id', 'event_id'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
