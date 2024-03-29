class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true
      t.integer :qty, default: 1
      t.float :price, default: 0.00

      t.timestamps
    end
  end
end
