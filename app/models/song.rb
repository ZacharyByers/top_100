class Song < ApplicationRecord
  validates_uniqueness_of :rank
  validates_numericality_of :minutes, :seconds, :rank
end
