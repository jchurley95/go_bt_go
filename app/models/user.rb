class User < ActiveRecord::Base
  # Include default devise modules.
  belongs_to :family
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
