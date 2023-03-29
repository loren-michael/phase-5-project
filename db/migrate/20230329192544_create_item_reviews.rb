class CreateItemReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :item_reviews do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :review

      t.timestamps
    end
  end
end
