class Family < ApplicationRecord
  belongs_to :house
  has_many :users
end
