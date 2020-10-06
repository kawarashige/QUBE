class CreateStudies < ActiveRecord::Migration[6.0]
  def change
    create_table :studies do |t|
      t.text :history
      t.text :celebrity
      t.text :info
      t.timestamps
    end
  end
end
