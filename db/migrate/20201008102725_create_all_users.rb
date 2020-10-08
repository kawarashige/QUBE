class CreateAllUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :all_users do |t|
      t.string  :nickname,   null: false, default: ""
      t.integer :age,        null: false, default: 0
      t.integer :experience, null: false, default: 0
      t.timestamps
    end
  end
end
