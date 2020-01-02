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
    t.bigint "expert_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["expert_id"], name: "index_expert_options_on_expert_id"
  end

  create_table "experts", force: :cascade do |t|
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "email", null: false
    t.bigint "profession_id", null: false
    t.bigint "status_id", null: false
    t.boolean "actived", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_experts_on_email"
    t.index ["profession_id"], name: "index_experts_on_profession_id"
    t.index ["status_id"], name: "index_experts_on_status_id"
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

  create_table "level_addictions", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "slug", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_level_addictions_on_slug", unique: true
  end

  create_table "level_family_relationships", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "slug", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_level_family_relationships_on_slug", unique: true
  end

  create_table "media", force: :cascade do |t|
    t.string "name", null: false
    t.string "path", null: false
    t.string "mime_type", null: false
    t.bigint "media_category_id", null: false
    t.bigint "expert_owner_id"
    t.bigint "user_owner_id"
    t.bigint "superuser_owner_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["expert_owner_id"], name: "index_media_on_expert_owner_id"
    t.index ["media_category_id"], name: "index_media_on_media_category_id"
    t.index ["superuser_owner_id"], name: "index_media_on_superuser_owner_id"
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

  create_table "professions", force: :cascade do |t|
    t.string "name", null: false
    t.string "code", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "quotes", force: :cascade do |t|
    t.string "text", null: false
    t.string "author", null: false
    t.bigint "created_by_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["created_by_id"], name: "index_quotes_on_created_by_id"
  end

  create_table "statuses", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "slug", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["slug"], name: "index_statuses_on_slug", unique: true
  end

  create_table "superusers", force: :cascade do |t|
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "email", null: false
    t.boolean "actived", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_superusers_on_email"
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
    t.string "password_digest", null: false
    t.string "email", null: false
    t.string "age", null: false
    t.bigint "level_addiction_id", null: false
    t.bigint "level_family_relationship_id", null: false
    t.boolean "actived", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["level_addiction_id"], name: "index_users_on_level_addiction_id"
    t.index ["level_family_relationship_id"], name: "index_users_on_level_family_relationship_id"
  end

  add_foreign_key "articles", "media", column: "media_id"
  add_foreign_key "articles", "superusers", column: "created_by_id"
  add_foreign_key "documentaries", "media", column: "media_id"
  add_foreign_key "documentaries", "superusers", column: "created_by_id"
  add_foreign_key "expert_options", "experts"
  add_foreign_key "experts", "professions"
  add_foreign_key "experts", "statuses"
  add_foreign_key "facts", "superusers", column: "created_by_id"
  add_foreign_key "faqs", "superusers", column: "created_by_id"
  add_foreign_key "media", "experts", column: "expert_owner_id"
  add_foreign_key "media", "media_categories"
  add_foreign_key "media", "superusers", column: "superuser_owner_id"
  add_foreign_key "media", "users", column: "user_owner_id"
  add_foreign_key "quotes", "superusers", column: "created_by_id"
  add_foreign_key "testimonies", "media", column: "media_id"
  add_foreign_key "testimonies", "superusers", column: "created_by_id"
  add_foreign_key "tips", "superusers", column: "created_by_id"
  add_foreign_key "users", "level_addictions"
  add_foreign_key "users", "level_family_relationships"
end
