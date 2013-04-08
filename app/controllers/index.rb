get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/game' do
  params.inspect
  params.each_value do |name|
    Player.find_or_create_by_username(name)
  end

  "hi"
end
