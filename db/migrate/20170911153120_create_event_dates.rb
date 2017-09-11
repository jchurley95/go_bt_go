class CreateEventDates < ActiveRecord::Migration[5.1]
  def change
    create_table :event_dates do |t|
      t.datetime :event_date

      t.timestamps
    end
  end
end
