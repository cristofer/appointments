class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :title
      t.datetime :apt_time

      t.timestamps null: false
    end
  end
end
