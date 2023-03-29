class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.belongs_to :user_id, null: false, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
