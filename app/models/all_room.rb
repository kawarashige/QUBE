class AllRoom < ApplicationRecord
  has_many :all_room_all_users
  has_many :users, through: :all_room_all_users
  has_many :all_messages
end
