#environment = :development
environment = :production

http_path = "/"
css_dir = "../../styles"
sass_dir = "."
images_dir = "../../img"
javascripts_dir = "/assets/js"
asset_cache_buster :none

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
