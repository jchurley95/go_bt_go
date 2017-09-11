class RemoveFamilies < ActiveRecord::Migration[5.1]
  def change
    drop_table :families
  end
end
