class AddFeastDayToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :saint_feast_day, :datetime
  end
end
