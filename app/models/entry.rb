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

class Entry < ActiveRecord::Base
  attr_accessible :guid, :link, :published_at, :title, :json, :feed_id

  belongs_to :feed

  def self.create_from_json!(entryData, feed)
    Entry.create!({
      guid: entryData.guid,
      link: entryData.link, 
      published_at: entryData.pubDate,
      title: entryData.title, 
      json: entryData,
      feed_id: feed.id
    })
  end
end
