import { execSync } from "child_process";

function run() {
  try {
    // Attempt to initialize git in a user-writable subdirectory instead of /app root
    execSync("git init .git_temp_dir", { stdio: "inherit" });
    // Additional setup or logic can be added here for repo in .git_temp_dir
  } catch (error) {
    // Gracefully handle permission denied or other git errors
    console.warn(
      "Git initialization skipped due to permission issues or environment limitations."
    );
  }
}

run();