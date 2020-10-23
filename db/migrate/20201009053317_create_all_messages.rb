class CreateAllMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :all_messages do |t|
      t.text :all_content, null: false
      t.references :all_user, null: false, foreign_key: true
      t.references :all_room,  null: false, foreign_key: true
      t.timestamps
    end
  end
end
