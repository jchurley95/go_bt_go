require_relative './family_data.rb'
require_relative './house_data.rb'
require_relative './student_data.rb'

User.destroy_all
Family.destroy_all
House.destroy_all

student_data = get_student_data
family_data = get_family_data
house_data = get_house_data

family_data.each do |house_name, families|
  info = house_data[house_name]
  current_house = House.create!({
    name: info[:name],
    description: info[:description],
    picture_url: info[:picture_url],
    points: info[:points],
    house_of_the_month?: info[:house_of_the_month?],
    house_of_the_year?: info[:house_of_the_year],
    house_motto: info[:house_motto],
    house_mascot: info[:house_mascot],
    house_color: info[:house_color],
    house_saint: info[:house_saint],
    house_motto_latin: info[:house_motto_latin],
    # saint_feast_day: info[:saint_feast_day],
    house_director_name: info[:house_director_name]
  })

  families.each do |family|
    current_family = Family.create!({
      family_mentor: family[:family_mentor],
      points: family[:points],
      house: current_house
    })

  end
end

student_data.each do |students|
  
  students.each do |student|

    student_name = student[:student_name]
    name_split = student_name.split(" ")
    noComma = name_split.first.delete(",")
    split_last = name_split.last.split("")
    first_initial = split_last.first
    email_name = (first_initial + noComma)
    final_email = email_name + "@gmail.com"
    

    current_student = User.create!({
      email: final_email,
      password: "bttitans17",
      password_confirmation: "bttitans17"
    })

  end

end

