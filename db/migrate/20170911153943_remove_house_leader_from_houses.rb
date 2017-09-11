class RemoveHouseLeaderFromHouses < ActiveRecord::Migration[5.1]
  def change
    remove_column :houses, :house_leader, :string
  end
end
