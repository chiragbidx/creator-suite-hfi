import { execSync } from "child_process";
import fs from "fs";
import "./static-server.js";
import { startGitPoll } from "./git-poll.js";

const BRANCH = process.env.PREVIEW_BRANCH || "main";
const REPO_URL = process.env.REPO_URL;
const CWD = "/app";

if (!REPO_URL) {
  console.error("[supervisor] REPO_URL is required");
  process.exit(1);
}

process.chdir(CWD); // 🔑 FORCE cwd

const run = (cmd) => execSync(cmd, { stdio: "inherit", cwd: CWD });

console.log("[supervisor] ensuring git repo");

if (!fs.existsSync(".git")) {
  run("git init");
}

try {
  const current = execSync("git remote get-url origin", { cwd: CWD }).toString().trim();
  if (current !== REPO_URL) {
    run(`git remote set-url origin ${REPO_URL}`);
  }
} catch {
  run(`git remote add origin ${REPO_URL}`);
}

run(`git fetch origin ${BRANCH} --depth=1 --prune`);
run(`git reset --hard origin/${BRANCH}`);
run("git clean -fd");

console.log("[supervisor] static preview running");

// 🔑 start polling ONLY after git is ready
startGitPoll();
