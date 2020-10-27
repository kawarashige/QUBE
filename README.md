# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# アプリケーション名

## Rubi's Chat

# アプリケーション概要

## ルービックキューブを趣味として習慣化することができるようになります。

# 本番環境
https://qube29821.herokuapp.com/

# 目指した課題解決

## ルービックキューブを趣味にしたいが、長続きしないという課題をもつ人に向けて共通の趣味を持つ人とのコミュニケーションの場としてこのアプリケーションを提供することでその課題解決を図ります。

# DEMO
## アプリケーションの主な動作
![ru-cube2](https://user-images.githubusercontent.com/70368456/97253357-8a7f1780-184f-11eb-96f1-8dc404ffa4ef.gif)
## 未完成のルービックキューブ
![ru-cube4](https://user-images.githubusercontent.com/70368456/97254382-966bd900-1851-11eb-85b3-f6f58afb5fd4.gif)
## ルービックキューブ試作
![ru-cube3](https://user-images.githubusercontent.com/70368456/97254189-2b220700-1851-11eb-8d59-441a4c3a29c3.gif)
![ru-cube7](https://user-images.githubusercontent.com/70368456/97256694-18123580-1857-11eb-986f-64d674c00a93.gif)
## 

# 工夫した点
全ユーザー同士の交流の場としてALL Chatといったログイン以前にチャットを行える場を用意した点です.(現在ビューのみです。)</br>
画面右端に部分テンプレートとして切り出したアイコン一覧を表示することで、画面遷移を行いやすくした点です。</br>
ルービックキューブの画像をトリミングを行い、背景を削除しサイズを調整することで装飾として用いた点です。
  ## 課題
  ページ右端に表示されているアイコンがどのページを示しているかが分かりづらい点です。
  ## 改善
  JavaScriptでアイコンにマウスを合わせた際に、ページ名を表示させるように実装を行います。

# 実装した機能

| 機能 | 目的 | 詳細 | ストーリー |
| --- | ---- | --- | -------- |
| ユーザー新規登録機能 | ユーザーを登録する. | 新規登録をすることでDBにユーザーの情報を保存します。 | ・プロフィールの情報、email、password、ニックネーム、年齢、趣味歴を記入する欄を設けます。 |
| ログイン機能 | ユーザーがログイン・ログアウトを行えることができるようにします。 | ユーザーがログイン・ログアウトボタンを押すことでログイン・ログアウトが行えるようになります。 | ・ログイン画面において、DBに保存されているユーザーと一致するemailとpasswordを持つユーザーにアプリケーションの全ての機能を使えることのできる権限を付与します。 |

# これから実装する機能

| 機能 | 目的 | 詳細 | ストーリー |
| --- | ---- | --- | -------- |
| チャット機能 | ユーザー同士がチャットを行えるようにする。 | ユーザーはコメント、画像、動画を投稿できるようになります。 | ・ユーザーはコメント、画像、動画を記入・添付し「投稿する」ボタンを押すことでチャット画面上に表示することができます。 |
| メンバー一覧表示機能 | グループに属する人を一覧表示する。 | メンバーという文字をクリックすることで、グループに属するメンバー全員を表示することができる。 | ・メンバーの隣に所属している人数が表示されていて、クリックすることにより所属しているユーザーの名前が縦に羅列されます。 |
| コメントへのgoodボタン | コメントにgoodアイコンを付けられるようにする。 | ユーザーはコメント一つに対して一つまでサムアップアイコンをつけることができます。 | ・コメントについて、色のついていないサムアップボタンを押すことで色付きのサムアップアイコンになることで隣に表示されているgoodされている数を表す数字のカウントが1足されます。 |
| リサイクル物品出品機能 | リサイクルに出したい商品を出品する。 | リサイクルに出しても良い物品を出品できます。 | ・出品ページの出品するボタンを押すことで、物品を出品することができます。・購入時期/経過年数/物品の状態/物品の情報/配達元の地域/配達までの日数の記入欄を設ける。 |
| リサイクル物品表示機能 | 出品機能により出品された商品を表示する。 | 出品されている商品を表示します。 | ・出品機能によって出品された物品をリサクルページに表示することが出来ます。 |
| リサイクル物品授受機能 | 出品された物品を受け取ります。 | 出品されている商品を受け取ることができます。 | ・出品しているユーザーと物品を受け取ることの出来るユーザーは同一ではないです。・出品されている商品を選択し、詳細ページを開くことで受け取るボタンを押すことが出来ます。 |
| マイページ情報表示機能 | ユーザーの情報を表示する。 | 自分自身の情報を他のユーザーに公開することができます。 | ・自身のプロフィール、新規登録の際に入力したニックネーム・年齢・趣味歴を表示します。・他のユーザーが自身のプロフィール情報を愛知ウランすることが出来ます。 |
| ログイン出席簿 | ログイン日数の情報を表示する。 | ログインした場合に日に一度スタンプを押すことができるようになり、ログイン日数を視覚化します。 | ・ログインした際その日一度だけにスタンプを押すことができ、ログイン情報を視覚化することができます。 |
![ru-cube5](https://user-images.githubusercontent.com/70368456/97255154-53ab0080-1853-11eb-8d1f-df02653729d0.gif)
| 趣味調べ記入機能 | 趣味についての情報を記入する。 | 趣味について調べた内容を記入することができます。 | ・歴史/著名人/関連する情報を記入するための欄を設けます。 |
| 趣味調べ表示機能 | 趣味についての情報を表示する。 | 趣味について調べた内容を他のユーザーに表示することができます。 | ・自身が記入した趣味についての情報を他のユーザーに公開出来ます。・編集するボタンを押すことで編集することが可能になります。 |
![ru-cube6](https://user-images.githubusercontent.com/70368456/97255216-80f7ae80-1853-11eb-8edf-fdf93aa752f9.gif)
| フォロー・フォロワー機能 | 自身が興味ある人との繋がりを生みます。 | ユーザーは、自分以外をフォローすることができ、他のユーザーをフォローした場合、フォローしたユーザーのマイページにフォロワーとして表示されます。 | ・自身以外のマイページに表示されるフォローするボタンを押すことでそのユーザーをフォローすることができます。 |
| ユーザー振り分け機能 | ユーザーの入ることのできるチャットルームを制限する | ログイン画面のルービックキューブの完成度合いによりチャットルームA, B, Cとそれぞれに遷移が可能になります。 | 6面揃えることができたらAのチャットルームへ、下一面と二段目まで揃え雨ことができましたらチャットルームBへ、下一面と一段目まで揃えることができたらチャットルームCへ遷移が可能になります。 |

# データベース設計

## all_usersテーブル

| Column      | Type    | Option                   |
| ----------- | ------- | ------------------------ |
| nickname    | string  | null: false, default: "" |
| email       | string  | null: false, default: "" |
| password    | string  | null: false, default: "" |
| years_older | integer | null: false, default: 0  |
| experience  | integer | null: false, default: 0  |

### Association

- has_one :home
- has_one :study
- has_many :items
- has_many :recycles
- has_many :all_room_all_users
- has_many :all_rooms, through: :all_room_all_users
- has_many :all_messages
- has_many :a_user_all_users
- has_many :a_users, through: :a_user_all_users
- has_many :b_user_all_users
- has_many :b_users, through: b_user_all_users
- has_many :c_user_all_users
- has_many :c_users, through: c_user_all_users

## a_user_all_usersテーブル

| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| all_user | references | null: false, foreign_key: true |
| a_user   | references | null: false, foreign_key: true |

### Association

- belongs_to :all_user
- belongs_to :a_user

## b_user_all_usersテーブル

| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| all_user | references | null: false, foreign_key: true |
| b_user   | references | null: false, foreign_key: true |

### Association

- belongs_to :user_all
- belongs_to :user_b

## c_user_all_usersテーブル

| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| all_user | references | null: false, foreign_key: true |
| c_user   | references | null: false, foreign_key: true |

### Association

- belongs_to :all_user
- belongs_to :c_user

## a_usersテーブル

| Column | Type | Option |
| ------ | ---- | ------ |
|        |      |        |

### Association

- has_many :a_room_a_users
- has_many :a_rooms, through :a_room_a_users
- has_many :a_messages

## b_usersテーブル

| Column | Type | Option |
| ------ | ---- | ------ |
|        |      |        |

### Association

- has_many :b_room_b_users
- has_many :b_rooms, through :b_room_b_users
- has_many :b_messages

## c_usersテーブル

| Column | Type | Option |
| ------ | ---- | ------ |
|        |      |        |

### Association

- has_many :c_room_c_users
- has_many :c_rooms, through :c_room_c_users
- has_many :c_messages

## all_messagesテーブル

| Column      | Type       | Option                         |
| ----------- | ---------- | ------------------------------ |
| all_content | text       | null: false, default: ""       |
| all_user    | references | null: false, foreign_key: true |
| all_room    | references | null: false, foreign_key: true |

### Association

- belongs_to :all_room
- belongs_to :all_user

## a_messagesテーブル

| Column    | Type       | Option                         |
| --------- | ---------- | ------------------------------ |
| a_content | text       | null: false                    |
| a_user    | references | null: false, foreign_key: true |
| a_room    | references | null: false, foreign_key: true |

### Association

- belongs_to :a_room
- belongs_to :a_user

## b_messagesテーブル

| Column    | Type       | Option                         |
| --------- | ---------- | ------------------------------ |
| b_content | text       | null: false, default: ""       |
| a_user    | references |              foreign_key: true |
| b_user    | references | null: false, foreign_key: true |
| b_room    | references | null: false, foreign_key: true |

### Association

- belongs_to :b_room
- belongs_to :a_user
- belongs_to :b_user

## c_messagesテーブル

| Column    | Type       | Option                         |
| --------- | ---------- | ------------------------------ |
| c_content | text       | null: false, default: ""       |
| a_user    | references |              foreign_key: true |
| b_user    | references |              foreign_key: true |
| c_user    | references | null: false, foreign_key: true |
| c_room    | references | null: false, foreign_key: true |

### Association

- belongs_to :c_room
- belongs_to :a_user
- belongs_to :b_user
- belongs_to :c_user

## all_room_all_usersテーブル

| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| all_user | references | null: false, foreign_key: true |
| all_room | references | null: false, foreign_key: true |

### Association

- belongs_to :all_user
- belongs_to :all_room

## a_room_a_usersテーブル

| Column | Type       | Option                         |
| ------ | ---------- | ------------------------------ |
| a_user | references | null: false, foreign_key: true |
| a_room | references | null: false, foreign_key: true |

### Association

- belongs_to :a_user
- belongs_to :a_room

## b_room_b_usersテーブル

| Column | Type       | Option                         |
| ------ | ---------- | ------------------------------ |
| b_user | references | null: false, foreign_key: true |
| b_room | references | null: false, foreign_key: true |

### Association

- belongs_to :b_user
- belongs_to :b_room

## c_room_c_usersテーブル

| Column | Type       | Option                         |
| ------ | ---------- | ------------------------------ |
| c_user | references | null: false, foreign_key: true |
| c_room | references | null: false, foreign_key: true |

### Association

- belongs_to :c_user
- belongs_to :c_room

## all_roomsテーブル

| Column   | Type   | Option                   |
| -------- | ------ | ------------------------ |
| all_name | string | null: false, default: "" |

### Association

- has_many :all_room_all_users
- has_many :users, through: :all_room_all_users
- has_many :all_messages

## a_roomsテーブル

| Column | Type   | Option                   |
| ------ | ------ | ------------------------ |
| a_name | string | null: false, default: "" |

### Association

- has_many :a_room_a_users
- has_many :users, through :a_room_a_users
- has_many :a_messages

## b_roomsテーブル

| Column | Type   | Option                   |
| ------ | ------ | ------------------------ |
| b_name | string | null: false, default: "" |

### Association

- has_many :b_room_b_users
- has_many :users, through :b_room_b_users
- has_many :b_messages

## c_roomsテーブル

| Column | Type   | Option                   |
| ------ | ------ | ------------------------ |
| c_name | string | null: false, default: "" |

### Association

- has_many :c_room_c_users
- has_many :users, through :c_room_c_users
- has_many :c_messages

## studiesテーブル

| Column    | Type       | Option                         |
| --------- | ---------- | ------------------------------ |
| history   | text       |                                |
| celebrity | text       |                                |
| info      | text       |                                |
| all_user  | references | null: false, foreign_key: true |

### Association

- belongs_to :all_user

## homesテーブル

| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| all_user | references | null: false, foreign_key: true |

### Association

- belongs_to :all_user

## itemsテーブル 

| Column         | Type       | Option                         |
| -------------- | ---------- | ------------------------------ |
| old            | integer    | null: false                    |
| item_info      | string     | null: false, default: ""       |
| item_status_id | integer    | null: false, default: 0        |
| prefecture_id  | integer    | null: false, default: 0        |
| schedule_id    | integer    | null: false, default: 0        |
| all_user       | references | null: false, foreign_key: true |


### Association

- belongs_to :all_user
- has_one :recycle

## recyclesテーブル

| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| all_user | references | null: false, foreign_key: true |
| item     | references | null: false, foreign_key: true |

### Association

- belongs_to :all_user
- belongs_to :item
- has_one :address

## addressesテーブル

| Column   | Type       | Option                              |
| ------------- | ---------- | ------------------------------ |
| postal_code   | string     | null: false, default: ""       |
| prefecture_id | integer    | null: false, default: 0        |
| city          | string     | null: false, default: ""       |
| addresses     | string     | null: false, default: ""       |
| building      | string     | null: false, default: ""       |
| phone         | string     | null: false, default: ""       |
| recycle       | references | null: false, foreign_key: true |

### Association

- belongs_to :recycle

![ER図](https://i.gyazo.com/a16541b06ae298a3b578cc06eaf565a3.png)

# ローカルリポジトリでの動作方法

git clone https://github.com/kawarashige/QUBE

ruby 2.6.5

