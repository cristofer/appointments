class Appointment < ActiveRecord::Base
  scope :get_all, -> { order(apt_time: :asc) }
end
