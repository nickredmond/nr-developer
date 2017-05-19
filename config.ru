require "json"

use Rack::Static,
	:urls => ["/css", "/js",
			"/css/bootstrap-3.3.7-dist", "/js/bootstrap-3.3.7-dist","/fonts/bootstrap-3.3.7-dist"],
	:root => "public"

class GradeQuizApp
	QUIZ_LENGTH = 20
	correct_answers = {
		0 => 1,
		1 => 1
	}

	def call(env)
		request = Rack::Request.new(env)
		response = nil

		if request.post?
			body = JSON.parse(request.body.read)
			number_correct = 0
			body["answers"].each do |answer|
				key = answer["key"]
				if answer["value"] == correct_answers[key]
					number_correct += 1
				end
			end

			percentage = number_correct / body["answers"].count
			score = (percentage * 100).floor
			mastery = (score * (body["answers"].count / QUIZ_LENGTH)).floor
			response = [
				200,
				{
					"Content-Type" => "application/json",
					"Cache-Control" => "public, max-age=86400"

				},
				[{ mastery_score: mastery }.to_json]
			]
		else
			response = [
				400,
				{
					"Content-Type" => "application/json",
					"Cache-Control" => "public, max-age=86400"
				},
				[{ error_message: "Unsupported HTTP method 'GET'" }.to_json]
			]
		end

		response
	end
end

class TakeQuizApp
	def call(env)
		[
			200,
			{
				"Content-Type" => "text/html",
				"Cache-Control" => "public, max-age=86400"

			},
			File.open("public/index.html", File::RDONLY)
		]
	end
end

run Rack::URLMap.new(
	"/" => TakeQuizApp.new,
	"/grade-quiz" => GradeQuizApp.new
)

# run lambda { |env|
	
# }