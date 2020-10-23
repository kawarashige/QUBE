class CreateAllRoomAllUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :all_room_all_users do |t|
      t.references :all_user, null: false, foreign_key: true
      t.references :all_room, null: false, foreign_key: true
      t.timestamps 
    end
  end
end
