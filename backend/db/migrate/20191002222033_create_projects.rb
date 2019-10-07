class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :link
      t.string :category
      t.string :technology1
      t.string :technology2
      t.string :technology3
      t.string :image

      t.timestamps
    end
  end
end
