class AddEventTypeToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :type_of_event, :string
  end
end
