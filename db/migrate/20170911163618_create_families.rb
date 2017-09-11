class CreateFamilies < ActiveRecord::Migration[5.1]
  def change
    create_table :families do |t|
      t.string :family_mentor
      t.integer :points
      t.references :house, foreign_key: true

      t.timestamps
    end
  end
end
