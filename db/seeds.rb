i = 1
100.times do
  Song.create(title: Faker::Overwatch.quote, minutes: 2, seconds: 21, rank: i)
  i += 1
end
