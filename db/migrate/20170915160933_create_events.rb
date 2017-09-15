class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :event_name
      t.datetime :event_date
      t.string :event_time
      t.string :event_type

      t.timestamps
    end
  end
end
