class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :description
      t.string :picture_url
      t.integer :points
      t.string :house_leader
      t.boolean :house_of_the_month?
      t.boolean :house_of_the_year?

      t.timestamps
    end
  end
end
