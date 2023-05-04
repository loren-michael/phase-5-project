class CreateCreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :create_cart_items do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
