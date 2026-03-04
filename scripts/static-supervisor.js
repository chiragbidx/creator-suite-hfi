import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";

function log(message) {
  console.log(`[GitInitFix] ${message}`);
}

function isWritable(dirPath) {
  try {
    fs.accessSync(dirPath, fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

function removeDirIfExists(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      // Attempt to remove directory recursively
      fs.rmSync(dirPath, { recursive: true, force: true });
      log(`Removed existing directory: ${dirPath}`);
    }
  } catch (error) {
    log(`Failed to remove directory ${dirPath}: ${error.message}`);
  }
}

function updatePermissions(dirPath) {
  try {
    fs.chmodSync(dirPath, 0o700);
    log(`Updated permissions for directory: ${dirPath}`);
  } catch (error) {
    log(`Failed to update permissions for ${dirPath}: ${error.message}`);
  }
}

function tryGitInit(dirPath) {
  try {
    execSync(`git init ${dirPath}`, { stdio: "inherit" });
    log(`Git initialized successfully at: ${dirPath}`);
    return true;
  } catch (error) {
    log(`Git init failed at ${dirPath}: ${error.message}`);
    return false;
  }
}

function run() {
  // Possible base directories to try
  const baseDirs = [
    process.cwd(),
    os.homedir(),
    "/tmp"
  ];

  for (const baseDir of baseDirs) {
    if (!baseDir) {
      log(`Skipping invalid base directory`);
      continue;
    }
    log(`Checking base directory: ${baseDir}`);

    if (!isWritable(baseDir)) {
      log(`Directory not writable: ${baseDir}`);
      continue;
    }

    const gitDir = path.join(baseDir, ".git_temp_dir");

    removeDirIfExists(gitDir);

    if (!isWritable(baseDir)) {
      // Attempt to update permissions on baseDir if possible
      updatePermissions(baseDir);
      if (!isWritable(baseDir)) {
        log(`Still no write permission on directory after chmod: ${baseDir}`);
        continue;
      }
    }

    const success = tryGitInit(gitDir);
    if (success) {
      return;
    }
  }

  // If reached here, likely environment is read-only or restricted
  log("Git initialization skipped: environment likely blocks filesystem writes. Git operations should be performed outside the environment.");
}

run();