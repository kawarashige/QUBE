class CreateRoomAlls < ActiveRecord::Migration[6.0]
  def change
    create_table :room_alls do |t|
      t.string :name_all, null: false, default: ""
      t.timestamps
    end
  end
end
