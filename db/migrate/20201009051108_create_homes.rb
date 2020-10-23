class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.references :all_user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
