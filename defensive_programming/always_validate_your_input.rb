class Foo
	def Bar(num, str)
		if str.isA(String)
			puts "Stringify Bar"
			act_on_string(str)
		elsif num.isA(Fixnum)
			puts "Fixnumy Bar"
			act_on_integer(num)
		else
			do_something_else(num, str)
			puts "I don't know what this is"
		end
	end

	private
	def act_on_string(str)
		if str.isA(String)
			# do some action
		else
			raise Exception
		end
	end

	def act_on_integer(str)
		if str.isA(Number)
			# do some action
		else
			raise Exception
		end
	end

	def do_something_else(num, str)
		if str.isA(String)
			# do some action
		elsif num.isA(Fixnum)
			# do something else
		else
			raise Exception
		end
	end

end
