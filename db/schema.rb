# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_09_053317) do

  create_table "all_messages", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "all_content", null: false
    t.bigint "all_user_id", null: false
    t.bigint "all_room_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["all_room_id"], name: "index_all_messages_on_all_room_id"
    t.index ["all_user_id"], name: "index_all_messages_on_all_user_id"
  end

  create_table "all_room_all_users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "all_user_id", null: false
    t.bigint "all_room_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["all_room_id"], name: "index_all_room_all_users_on_all_room_id"
    t.index ["all_user_id"], name: "index_all_room_all_users_on_all_user_id"
  end

  create_table "all_rooms", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "all_name", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "all_users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "nickname", default: "", null: false
    t.integer "age", null: false
    t.integer "yers_of_experience", null: false
    t.bigint "all_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["all_user_id"], name: "index_all_users_on_all_user_id"
    t.index ["email"], name: "index_all_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_all_users_on_reset_password_token", unique: true
  end

  create_table "homes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "all_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["all_user_id"], name: "index_homes_on_all_user_id"
  end

  create_table "studies", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "history"
    t.text "celebrity"
    t.text "info"
    t.bigint "all_user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["all_user_id"], name: "index_studies_on_all_user_id"
  end

  add_foreign_key "all_messages", "all_rooms"
  add_foreign_key "all_messages", "all_users"
  add_foreign_key "all_room_all_users", "all_rooms"
  add_foreign_key "all_room_all_users", "all_users"
  add_foreign_key "all_users", "all_users"
  add_foreign_key "homes", "all_users"
  add_foreign_key "studies", "all_users"
end
