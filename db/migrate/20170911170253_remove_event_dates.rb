class RemoveEventDates < ActiveRecord::Migration[5.1]
  def change
    drop_table :event_dates
  end
end
