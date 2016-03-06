class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :zdata
      t.string :cdata

      t.timestamps null: false
    end
  end
end
