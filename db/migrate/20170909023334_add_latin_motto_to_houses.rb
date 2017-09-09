class AddLatinMottoToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :house_motto_latin, :string
  end
end
