class AddColorToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :house_color, :string
  end
end
