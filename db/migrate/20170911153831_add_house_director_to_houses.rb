class AddHouseDirectorToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :house_director_name, :string
  end
end
