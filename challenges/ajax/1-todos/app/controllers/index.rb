get '/' do

  @todos = Todo.all
  erb :index
end




post '/add_todo' do
	# toca madnarel un jason diceiendole exlicitamente el tipo de datos a recibir
  new_todo = Todo.create(todo_content: params[:todo_content1])
  content_type :json
  {new_todo2: new_todo}.to_json
  # se crea de un porque no tiene validaciones
  # redirect "/"
end


get '/todos/:id/delete' do
  new_todo = Todo.find(params[:id])
  new_todo.destroy
  content_type :json
  {new_todo: new_todo}.to_json
  # redirect '/'
end

get '/todos/:id/complete' do
  new_todo = Todo.find(params[:id])
  new_todo.update(completed: true)
  content_type :json
  {new_todo: new_todo}.to_json
  # redirect '/'
end



#hacer eldelete de una forma mas adecuada