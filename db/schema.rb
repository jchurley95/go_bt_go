# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170911170253) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "families", force: :cascade do |t|
    t.string "family_mentor"
    t.integer "points"
    t.bigint "house_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["house_id"], name: "index_families_on_house_id"
  end

  create_table "houses", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "picture_url"
    t.integer "points"
    t.boolean "house_of_the_month?"
    t.boolean "house_of_the_year?"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "house_motto"
    t.string "house_mascot"
    t.string "house_color"
    t.string "house_saint"
    t.string "house_motto_latin"
    t.datetime "saint_feast_day"
    t.string "house_director_name"
  end

  add_foreign_key "families", "houses"
end
