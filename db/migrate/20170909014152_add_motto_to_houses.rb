class AddMottoToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :house_motto, :string
  end
end
