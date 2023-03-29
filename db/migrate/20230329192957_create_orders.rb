class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :cart_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
