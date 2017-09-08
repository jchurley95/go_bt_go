class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.datetime :event_time_date
      t.integer :points

      t.timestamps
    end
  end
end
