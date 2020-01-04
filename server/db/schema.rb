# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_02_013443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title", null: false
    t.bigint "media_id", null: false
    t.string "url", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_articles_on_created_by_id"
    t.index ["media_id"], name: "index_articles_on_media_id"
  end

  create_table "documentaries", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.bigint "media_id", null: false
    t.string "url", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_documentaries_on_created_by_id"
    t.index ["media_id"], name: "index_documentaries_on_media_id"
  end

  create_table "expert_options", force: :cascade do |t|
    t.string "text", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_expert_options_on_created_by_id"
  end

  create_table "facts", force: :cascade do |t|
    t.string "title", null: false
    t.string "text", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_facts_on_created_by_id"
  end

  create_table "faqs", force: :cascade do |t|
    t.string "question", null: false
    t.string "answer", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_faqs_on_created_by_id"
  end

  create_table "media", force: :cascade do |t|
    t.string "name", null: false
    t.string "path", null: false
    t.string "mime_type", null: false
    t.bigint "media_category_id", null: false
    t.bigint "user_owner_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["media_category_id"], name: "index_media_on_media_category_id"
    t.index ["user_owner_id"], name: "index_media_on_user_owner_id"
  end

  create_table "media_categories", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "slug", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_media_categories_on_slug", unique: true
  end

  create_table "profiles", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_profiles_on_slug", unique: true
  end

  create_table "quotes", force: :cascade do |t|
    t.string "text", null: false
    t.string "author", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_quotes_on_created_by_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_roles_on_slug", unique: true
  end

  create_table "testimonies", force: :cascade do |t|
    t.string "title", null: false
    t.string "text", null: false
    t.bigint "media_id", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_testimonies_on_created_by_id"
    t.index ["media_id"], name: "index_testimonies_on_media_id"
  end

  create_table "tips", force: :cascade do |t|
    t.string "title", null: false
    t.string "text", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_tips_on_created_by_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.string "email", null: false
    t.bigint "profile_id", null: false
    t.bigint "role_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["profile_id"], name: "index_users_on_profile_id"
    t.index ["role_id"], name: "index_users_on_role_id"
    t.index ["username"], name: "index_users_on_username"
  end

  add_foreign_key "articles", "media", column: "media_id"
  add_foreign_key "articles", "users", column: "created_by_id"
  add_foreign_key "documentaries", "media", column: "media_id"
  add_foreign_key "documentaries", "users", column: "created_by_id"
  add_foreign_key "expert_options", "users", column: "created_by_id"
  add_foreign_key "facts", "users", column: "created_by_id"
  add_foreign_key "faqs", "users", column: "created_by_id"
  add_foreign_key "media", "media_categories"
  add_foreign_key "media", "users", column: "user_owner_id"
  add_foreign_key "quotes", "users", column: "created_by_id"
  add_foreign_key "testimonies", "media", column: "media_id"
  add_foreign_key "testimonies", "users", column: "created_by_id"
  add_foreign_key "tips", "users", column: "created_by_id"
  add_foreign_key "users", "profiles"
  add_foreign_key "users", "roles"
end
