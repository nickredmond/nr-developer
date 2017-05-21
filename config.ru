require "json"

use Rack::Static,
	:urls => ["/css", "/js",
			"/css/bootstrap-3.3.7-dist", "/js/bootstrap-3.3.7-dist","/fonts/bootstrap-3.3.7-dist"],
	:root => "public"

class GradeQuizApp
	QUIZ_LENGTH = 20

	def call(env)
		correct_answers = {
		0 => 2,
		1 => 1,
		2 => 1,
		3 => 0,
		4 => 3,
		5 => 3,
		6 => 2,
		7 => 2,
		8 => 1,
		9 => 0,
		10 => 3,
		11 => 3,
		12 => 2,
		13 => 1,
		14 => 3,
		15 => 0,
		16 => 1,
		17 => 1,
		18 => 0,
		19 => 3,
		20 => 0,
		21 => 1,
		22 => 3,
		23 => 0,
		24 => 3,
		25 => 3,
		26 => 2,
		27 => 0,
		28 => 3,
		29 => 1,
		30 => 1,
		31 => 2,
		32 => 2,
		33 => 3,
		34 => 0,
		35 => 0,
		36 => 1,
		37 => 1,
		38 => 2,
		39 => 1,
		40 => 1,
		41 => 0,
		42 => 3,
		43 => 0,
		44 => 0,
		45 => 1,
		46 => 2,
		47 => 2,
		48 => 2,
		49 => 2,
		50 => 0
	}

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
			puts "percent cor: " + number_correct.to_s

			percentage = number_correct.to_f / body["answers"].count
			puts "pp " + percentage.to_s
			mastery = (percentage * 100).floor
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

class CreateQuizApp
	def call(env)
		[
			200,
			{
				"Content-Type" => "text/html",
				"Cache-Control" => "public, max-age=86400"
			},
			File.open("public/create-quiz.html", File::RDONLY)
		]
	end
end

run Rack::URLMap.new(
	"/" => TakeQuizApp.new,
	"/grade-quiz" => GradeQuizApp.new,
	"/create-quiz" => CreateQuizApp.new
)

# run lambda { |env|
	
# }