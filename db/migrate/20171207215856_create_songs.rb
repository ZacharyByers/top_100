class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.integer :minutes
      t.integer :seconds
      t.integer :rank

      t.timestamps
    end
  end
end
