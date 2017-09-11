class EventDate < ApplicationRecord
    has_many :events, dependent: :destroy
end

# an event basically exists within an event_date