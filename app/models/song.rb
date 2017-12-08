class Song < ApplicationRecord
  validates_uniqueness_of :rank
end
