class AddMascotToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :house_mascot, :string
  end
end
