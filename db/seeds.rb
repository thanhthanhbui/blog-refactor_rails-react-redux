10.times do
  Blog.create(
    title: Faker::Superhero.name,
    body: Faker::Quote.matz,
  )
end

puts "Seeded"