import subprocess

chrome_path = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
dist_path = "C:/Users/Cavra/OneDrive/Skrivebord/fugazi/extension/dist/"

def load_extension():
    subprocess.call("TASKKILL /f  /IM  CHROME.EXE")
    subprocess.call([chrome_path, "--load-extension=" + dist_path, "--force-dev-mode-highlighting", "--no-default-browser-check"], cwd=".")

load_extension()