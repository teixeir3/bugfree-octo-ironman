# == Schema Information
#
# Table name: entries
#
#  id           :integer          not null, primary key
#  guid         :string(255)      not null
#  link         :string(255)      not null
#  title        :string(255)      not null
#  published_at :datetime         not null
#  feed_id      :integer          not null
#  json         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class EntryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
