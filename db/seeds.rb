# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Event.destroy_all
House.destroy_all

Event.create({name: "JV Softball", description: "JV Softball vs. Marist", points: 10})
Event.create({name: "Freshman Basketball", description: "Freshman Basketball vs. St. Pius X", points: 10})
Event.create({name: "Varisty Football", description: "Varisty Football vs. Buford", points: 10})
Event.create({name: "School Play", description: "Sweeney Todd", points: 10})

House.create({
name: "Aquinas",
description: 'St. Thomas Aquinas, priest and doctor of the Church, patron of all universities and of students. His feast day is January 28th. He was born toward the end of the year 1226. At age 17, St. Thomas renounced the things of this world and became a Dominican friar. Aquinas studied at Cologne under the St. Albert the Great. Here he was nicknamed the "dumb ox" because of his silent ways and huge size, but he was a brilliant student. Aquinas was a brilliant writer and teacher; Best known for writing Summa Theologica, which was essentially a summary of all the tenets of the Catholic faith. It is most well known for its “Five Ways”, which are logical arguments for the existence of God. St. Thomas was one of the greatest and most influential theologians of all time. He was canonized in 1323 and declared Doctor of the Church by Pope Pius V.
St. Thomas Aquinas is the patron of Catholic universities and schools. He is also the patron saint of all Catholic students. His feast day is celebrated on January 28.',
picture_url: "http://www.btcatholic.org/upload/Aquinas_house/Picture.jpg",
points: 0,
house_leader: "unknown",
house_of_the_month?: false,
house_of_the_year?: false,
house_motto: "Learning…Truth…Faith…Strength",
house_mascot: 'The Ox after St. Thomas Aquinas nickname, “the dumb ox”.',
house_color: 'light blue',
house_saint: 'St. Thomas Aquinas',
house_motto_latin: "Doctrina…Veritas…Fides…Vis"
})
