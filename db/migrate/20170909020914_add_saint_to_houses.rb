class AddSaintToHouses < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :house_saint, :string
  end
end
