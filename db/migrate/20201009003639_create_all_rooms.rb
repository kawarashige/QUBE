class CreateAllRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :all_rooms do |t|
      t.string     :all_name, null: false, default: ""
      t.timestamps
    end
  end
end
