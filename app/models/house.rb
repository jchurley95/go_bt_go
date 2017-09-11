class House < ApplicationRecord
    has_many :families, dependent: :destroy
end
