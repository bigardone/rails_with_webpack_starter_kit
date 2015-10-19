module TestHelper
  def take_screenshot
    path = File.join(Rails.root, "tmp", "screenshot_#{Time.now.to_i}.png")
    save_screenshot(path, full: true)
    require "launchy"
    Launchy.open("file:///#{path}")
    puts "Failure screenshot saved into #{path}"
  end
end
