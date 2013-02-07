@current_user ||= User.find(session[:user_id]) rescue nil

# why not: @current_user ||= User.find(session[:user_id]) if session[:user_id].present? 