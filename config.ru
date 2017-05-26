require "json"

use Rack::Static,
	:urls => ["/css", "/js",
			"/css/bootstrap-3.3.7-dist", "/js/bootstrap-3.3.7-dist","/fonts/bootstrap-3.3.7-dist"],
	:root => "public"



class HomeApp
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
	"/" => HomeApp.new
)

# run lambda { |env|
	
# }