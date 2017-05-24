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

			percentage = number_correct.to_f / body["answers"].count
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
				[{ error_message: "POST is the only supported HTTP method for this endpoint." }.to_json]
			]
		end

		response
	end
end

class HomeApp
	def call(env)
		request = Rack::Request.new(env)
		response = nil

		if /^\/[A-Za-z0-9_-]+/.match(request.path)
			quizName = request.path.split("/")[1]
			quizFilepath = "quizzes/" + quizName + ".json";

			if File.exist?(quizFilepath)
				file = File.open(quizFilepath, "r")
				jsonText = ""
				file.each_line do |line|
					jsonText += line
				end

				quizObject = JSON.parse(jsonText)
				for i in 0..(quizObject["questions"].size - 1) do
					quizObject["questions"][i].delete("correct-response-index")
				end

				response = [
					200,
					{
						"Content-Type" => "application/json",
						"Cache-Control" => "public, max-age=86400"

					},
					[quizObject.to_json]
				]
			else
				response = [
						404,
						{
							"Content-Type" => "application/json",
							"Cache-Control" => "public, max-age=86400"
						},
						[{
							error_message: "Quiz with name '" + quizName + "' could not be found."
						}.to_json]
					]
			end 
		else
			response = [
				200,
				{
					"Content-Type" => "text/html",
					"Cache-Control" => "public, max-age=86400"

				},
				File.open("public/index.html", File::RDONLY)
			]
		end

		response
	end
end

class CreateQuizApp
	def call(env)
		request = Rack::Request.new(env)
		response = nil

		if request.get?
			response = [
				200,
				{
					"Content-Type" => "text/html",
					"Cache-Control" => "public, max-age=86400"
				},
				File.open("public/create-quiz.html", File::RDONLY)
			]
		elsif request.post?
			body = JSON.parse(request.body.read)

			if body["quiz-name"] && body["questions"]
				quizFilepath = "quizzes/" + body["quiz-name"] + ".json"
				if File.exist?(quizFilepath)
					response = [
						400,
						{
							"Content-Type" => "application/json",
							"Cache-Control" => "public, max-age=86400"
						},
						[{
							error_message: "Quiz name '" + body["quiz-name"] + "' is already taken.",
							is_name_taken: true
						}.to_json]
					]
				else
					quizFile = File.open(quizFilepath, "w")
					quizFile.puts body.to_json
					quizFile.close

					response = [
						200,
						{
							"Content-Type" => "application/json",
							"Cache-Control" => "public, max-age=86400"
						},
						[{}.to_json]
					]
				end
			else
				response = [
					400,
					{
						"Content-Type" => "application/json",
						"Cache-Control" => "public, max-age=86400"
					},
					[{ error_message: "Request body is invalid." }.to_json]
				]
			end
		else

		end
			

		
	end
end

run Rack::URLMap.new(
	"/" => HomeApp.new,
	"/grade-quiz" => GradeQuizApp.new,
	"/create-quiz" => CreateQuizApp.new
)

# run lambda { |env|
	
# }