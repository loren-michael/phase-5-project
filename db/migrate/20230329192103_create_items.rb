class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :image
      t.string :description
      t.integer :qty
      t.string :category
      t.string :condition
      t.string :make
      t.string :model
      t.decimal :price, :precision => 10, :scale => 2, :default => 0.0

      t.timestamps
    end
  end
end
