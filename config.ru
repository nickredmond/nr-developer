require "json"

use Rack::Static,
	:urls => ["/css", "/js", "/img",
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

class CorkyDorkzApp
	def call(env)
		[
			200,
			{
				"Content-Type" => "application/zip",
				"Cache-Control" => "public, max-age=86400"

			},
			File.open("app-files/CorkyDorkz.zip", File::RDONLY)
		]
	end
end

class BilliardsApp
	def call(env)
		[
			200,
			{
				"Content-Type" => "application/zip",
				"Cache-Control" => "public, max-age=86400"

			},
			File.open("app-files/santiago-billiards.zip", File::RDONLY)
		]
	end
end

class Text4LessApp
	def call(env)
		[
			200,
			{
				"Content-Type" => "application/pdf",
				"Cache-Control" => "public, max-age=86400"

			},
			File.new("app-files/text-4-less.pdf", File::RDONLY)
		]
	end
end

run Rack::URLMap.new(
	"/" => HomeApp.new,
	"/corkydorkz" => CorkyDorkzApp.new,
	"/billiards" => BilliardsApp.new,
	"/text-4-less" => Text4LessApp.new
)