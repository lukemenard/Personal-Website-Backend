class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :company
      t.string :title
      t.string :location
      t.integer :start_year
      t.integer :end_year
      t.string :description1
      t.string :description2
      t.string :description3
      t.string :description4

      t.timestamps
    end
  end
end
