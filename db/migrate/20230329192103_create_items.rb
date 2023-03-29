class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.belongs_to :user_id, index: true
      t.string :name
      t.string :image
      t.string :description
      t.integer :qty
      t.string :category

      t.timestamps
    end
  end
end
