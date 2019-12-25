# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
2.5.1
* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|varchar|null: false, foreign_key: false|
|email|varchar|null: false, foreign_key: false|
|password|varchar|null: false, foreign_key: false|

### Association
- hasmany :comments
- hasmany :groups
- hasmany :groups_users,through: :groups_users

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|value|varchar|null: false, foreign_key: false|
|picture|varchar|null: false, foreign_key: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong_to :users
- belong_to :groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|varchar|null: false, foreign_key: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- hasmany :users, through: :groups_users
- hasmany :comments
- hasmany :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong_to :group
- belong_to :user