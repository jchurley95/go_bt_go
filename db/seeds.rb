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
    name: "Aquinas House",
    description: 'St. Thomas Aquinas, priest and doctor of the Church, patron of all universities and of students. His feast day is January 28th. He was born toward the end of the year 1226. At age 17, St. Thomas renounced the things of this world and became a Dominican friar. Aquinas studied at Cologne under the St. Albert the Great. Here he was nicknamed the "dumb ox" because of his silent ways and huge size, but he was a brilliant student. Aquinas was a brilliant writer and teacher; Best known for writing Summa Theologica, which was essentially a summary of all the tenets of the Catholic faith. It is most well known for its “Five Ways”, which are logical arguments for the existence of God. St. Thomas was one of the greatest and most influential theologians of all time. He was canonized in 1323 and declared Doctor of the Church by Pope Pius V.
    St. Thomas Aquinas is the patron of Catholic universities and schools. He is also the patron saint of all Catholic students. His feast day is celebrated on January 28.',
    picture_url: "http://www.btcatholic.org/upload/Aquinas_house/Picture.jpg",
    points: 0,
    house_leader: "unknown",
    house_of_the_month?: false,
    house_of_the_year?: false,
    house_motto: "Learning…Truth…Faith…Strength",
    house_mascot: 'The Ox',
    house_color: 'light blue',
    house_saint: 'St. Thomas Aquinas',
    house_motto_latin: "Doctrina…Veritas…Fides…Vis"
    #, saint_feast_day: 'January 28' // but this is in datetime format, maybe easier to just add it through edit house form using the gem for event date/time and leave it nil for now
})

House.create({
    name: "Dante House",
    description: 'Our house is named after Dante Alighieri (1265-1321) or simply Dante, who was an Italian poet from Florence. He was known for his stilnovo poetry—poetry about the purity of love. His central work, the Commedia Divina (The Divine Comedy), is considered the greatest literary work composed in the Italian language and a masterpiece of world literature.
    He was banished from his beloved hometown in 1301 and went into exile in Verona, where he settled to write the Divine Comedy. It went on to become one of the most famous pieces of religious poetry, earning popularity both immediate and lasting while defining modern and archaic views of the Catholic afterlife. St. Michael the Archangel - Feast day - September 29th The name Michael signifies "Who is like to God?" and was the war cry of the good angels in the battle fought in heaven against Satan and his followers. Holy Scripture describes St. Michael as "one of the chief princes," and leader of the forces of heaven in their triumph over the powers of Satan. He has been especially honored and invoked as patron and protector by the Church from the time of the Apostles. St. Michael is the patron of grocers, mariners, paratroopers, police and sickness.',
    picture_url: "http://www.btcatholic.org/upload/miller_joe/St.MichaelIconImage.jpg",
    points: 0,
    house_leader: "unknown",
    house_of_the_month?: false,
    house_of_the_year?: false,
    house_motto: "A Great Flame Follows A Tiny Spark",
    house_mascot: 'Dante Pyro',
    house_color: 'orange', # and also black, but for this just orange since will be used for css
    house_saint: 'St. Michael the Archangel',
    house_motto_latin: "POCA FAVILLA GRAN FIAMMA SECONDA"  # actually Italian
    #, saint_feast_day: 'September 29'
})

House.create({
    name: "Goretti House",
    description: "St. Maria Goretti, the patron Saint of youth, young women, purity, and victims of rape (b: 1890 d: 1902). Born in Corinaldo, Ancona, Italy, on October 16, 1890. In 1902 an 18-year-old neighbor, Alexander, grabbed her from her steps and tried to rape her. When Maria said that she would rather die than submit, Alexander began stabbing her with a knife.  As she lay in the hospital, she forgave Alexander before she died. Her death didn't end her forgiveness, however. Alexander was captured and sentenced to thirty years. He was unrepentant until he had a dream that he was in a garden. Maria was there and gave him flowers. When he woke, he was a changed man, repenting of his crime and living a reformed life. When he was released after 27 years, he went directly to Maria's mother to beg her forgiveness, which she gave. 'If my daughter can forgive him, who am I to withhold forgiveness,' she said. Maria was declared a saint in 1950 and her attacker Alexander was there to celebrate her canonization. Her feast day is July 6.",
    picture_url: "http://www.btcatholic.org/upload/freeman_rachel/stmariagoretti.jpg",
    points: 0,
    house_leader: "unknown",
    house_of_the_month?: false,
    house_of_the_year?: false,
    house_motto: "Purity, Faith and Forgiveness",
    house_mascot: 'Goretti Gladiator',
    house_color: 'maroon',
    house_saint: 'St. Maria Goretti',
    house_motto_latin: "Puritas, Fides et Misericordia" 
    #, saint_feast_day: 'July 6'
})

House.create({
    name: "Kolbe House",
    description: "Saint Maximilian Kolbe (January 8 1894-August 14 1941) was a Conventual Franciscan friar who volunteered to die in place of a stranger in the German death camp of Auschwitz, located in German occupied Poland during World War II.",
    picture_url: "http://www.btcatholic.org/upload/keel_alan/stmaximiliankolbe.jpg",
    points: 0,
    house_leader: "unknown",
    house_of_the_month?: false,
    house_of_the_year?: false,
    house_motto: "He Chose Both",
    house_mascot: 'Kolbe Knight',
    house_color: 'green',
    house_saint: 'St. Maximilian Kolbe',
    house_motto_latin: "Elegit Ambos" 
    #, saint_feast_day: 'August 14'
})

House.create({
    name: "Lasalle House",
    description: "St. Jean Baptiste LaSalle (1651-1719) was a French Priest who dedicated more than 40 years to the education of poor children. He began as the spiritual director of a poor girl's school and later helped to start a poor boy's school. He then founded the first school dedicated to teachers as well as numerous high schools.",
    picture_url: "http://www.btcatholic.org/upload/parker_meredith/St.JeanLaSalle.jpg",
    points: 0,
    house_leader: "unknown",
    house_of_the_month?: false,
    house_of_the_year?: false,
    house_motto: "Be Driven by the Love of God",
    house_mascot: 'Lasalle Lion',
    house_color: 'Red',
    house_saint: 'St. Jean Baptiste LaSalle',
    house_motto_latin: "INCITATOR A DEI CARITATE" 
    #, saint_feast_day: 'August 14' UPDATE
})

House.create({
    name: "Seton House",
    description: "Elizabeth Ann Bayley Seton (1774 – 1821) is the first American-born female saint. She was raised in a Protestant family and, along with her sister-in-law, performed charitable works which garnered them the name of the “Protestant Sisters of Charity.” After her husband William Seton took ill, she accompanied him on a voyage in an effort to improve his health. They spent time in Italy, where William passed away; however, it was during her time in Italy that Elizabeth gained a great appreciation for the Catholic Church. Elizabeth was baptized into the Church on March 14, 1805, and received her First Communion on March 25. It was said that she relished Communion so much that she attended Mass twice on Sundays to receive it. She began her career in religious education in 1808 in Baltimore where she opened a school for underprivileged children. The next year, she established the Sisters of Charity of which she served as the mother superior for many years as Catholic education spread across the United States. In 1814, Mother Seton and the Sisters of Charity began operating the nation’s first Catholic orphanage in Philadelphia. She enjoyed her involvement in Catholic education until her death. Seton was beatified in 1963, and Pope John Paul II canonized her on September 14, 1975.",
    picture_url: "http://www.btcatholic.org/upload/Seton_house/ElizabethAnnSeton.gif",
    points: 0,
    house_leader: "unknown",
    house_of_the_month?: false,
    house_of_the_year?: false,
    house_motto: "Live simply that others may simply live.",
    house_mascot: 'Seton Wolf',
    house_color: 'Gray',
    house_saint: 'St. Elizabeth Ann Bayley Seton',
    house_motto_latin: "(St. Seton was a native English speaker)" 
    #, saint_feast_day: 'August 14' UPDATE
})

House.create({
    name: "Vianney House",
    description: "Elizabeth Ann Bayley Seton (1774 – 1821) is the first American-born female saint. She was raised in a Protestant family and, along with her sister-in-law, performed charitable works which garnered them the name of the “Protestant Sisters of Charity.” After her husband William Seton took ill, she accompanied him on a voyage in an effort to improve his health. They spent time in Italy, where William passed away; however, it was during her time in Italy that Elizabeth gained a great appreciation for the Catholic Church. Elizabeth was baptized into the Church on March 14, 1805, and received her First Communion on March 25. It was said that she relished Communion so much that she attended Mass twice on Sundays to receive it. She began her career in religious education in 1808 in Baltimore where she opened a school for underprivileged children. The next year, she established the Sisters of Charity of which she served as the mother superior for many years as Catholic education spread across the United States. In 1814, Mother Seton and the Sisters of Charity began operating the nation’s first Catholic orphanage in Philadelphia. She enjoyed her involvement in Catholic education until her death. Seton was beatified in 1963, and Pope John Paul II canonized her on September 14, 1975.",
    picture_url: "http://www.btcatholic.org/upload/Vianney_house/vianney.jpg",
    points: 0,
    house_leader: "unknown",
    house_of_the_month?: false,
    house_of_the_year?: false,
    house_motto: "By endurance we conquer",
    house_mascot: 'Seton Wolf',
    house_color: 'navy blue',
    house_saint: 'St. John Vianney',
    house_motto_latin: "Fortitudine Vincimus" 
    #, saint_feast_day: 'August 14' UPDATE
})