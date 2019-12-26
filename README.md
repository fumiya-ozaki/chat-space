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
|name|string|null: false, foreign_key: false|
|email|string|null: false, foreign_key: false|
|password|string|null: false, foreign_key: false|

### Association
- has_many :comments
- has_many :groups,through: :groups_users
- has_many :groups_users

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|comment|string|foreign_key: false|
|image|string|foreign_key: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong_to :user
- belong_to :group


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: false|


### Association
- has_many :users, through: :groups_users
- has_many :comments
- has_many :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong_to :group
- belong_to :user