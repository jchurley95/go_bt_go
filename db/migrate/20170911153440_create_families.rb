class CreateFamilies < ActiveRecord::Migration[5.1]
  def change
    create_table :families do |t|
      t.integer :points
      t.string :family_mentor

      t.timestamps
    end
  end
end
