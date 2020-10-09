class AllUser < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :home
  has_one :study
  has_many :all_room_all_users
  has_many :all_rooms, through: :all_room_all_users
  has_many :all_messages
end
