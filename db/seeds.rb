# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Event.destroy_all

Event.create({name: "JV Softball", description: "JV Softball vs. Marist", points: 10})
Event.create({name: "Freshman Basketball", description: "Freshman Basketball vs. St. Pius X", points: 10})
Event.create({name: "Varisty Football", description: "Varisty Football vs. Buford", points: 10})
Event.create({name: "School Play", description: "Sweeney Todd", points: 10})