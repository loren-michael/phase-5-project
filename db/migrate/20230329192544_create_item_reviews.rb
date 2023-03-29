class CreateItemReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :item_reviews do |t|
      t.belongs_to :item_id, null: false, foreign_key: true
      t.belongs_to :user_id, null: false, foreign_key: true
      t.string :review

      t.timestamps
    end
  end
end
