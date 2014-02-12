# == Schema Information
#
# Table name: feeds
#
#  id         :integer          not null, primary key
#  url        :string(255)      not null
#  title      :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class FeedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
