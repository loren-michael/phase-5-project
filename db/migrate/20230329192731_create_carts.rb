class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :active
      t.boolean :purchased

      t.timestamps
    end
  end
end
