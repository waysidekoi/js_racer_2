get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/games/new' do
  params.each_with_index do |(player,name), i|
    Player.find_or_create_by_username(name)
    if i == 0
      session[:player1_name] = name
    elsif i == 1
      session[:player2_name] = name
    end
  end

  player1 = Player.find_by_username(session[:player1_name])
  player2 = Player.find_by_username(session[:player2_name])

  @game = Game.create(player1_id: player1.id, player2_id: player2.id)

  # erb :game
  redirect "/games/#{@game.id}"
end

get '/games/:id' do
  @game = Game.find(params[:id])
  # raise params.inspect
  # Winner
  # Length of time
  # Status
  erb :game

end

