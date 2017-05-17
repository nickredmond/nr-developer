use Rack::Static,
	:urls => ["/css", "/js",
			"/css/bootstrap-3.3.7-dist", "/js/bootstrap-3.3.7-dist","/fonts/bootstrap-3.3.7-dist"],
	:root => "public"

run lambda { |env|
	[
		200,
		{
			"Content-Type" => "text/html",
			"Cache-Control" => "public, max-age=86400"

		},
		File.open("public/index.html", File::RDONLY)
	]
}