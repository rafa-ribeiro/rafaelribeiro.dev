#!/bin/bash -e


build_project() {
	hugo
}

commit() {
	message=$1
	git add .
	git commit -m "$message"
}

push() {
	git push
}

go_to() {
	full_path_dir=$1
	$(echo "cd $full_path_dir/")
}

pull_submodule() {
	git pull git@github.com:rafa-ribeiro/rafaelribeiro.dev_content.git main
}

copy_files_to_submodule() {
	cp -r ../public/* .
}

commit_and_push_to_submodule() {
	git add .
	release_date=$(date)
	commit "New Blog Release on $release_date"
	git push origin HEAD:main
}

update_submodule() {
	git add rafaelribeiro.dev_content
	commit "Update submodule"
	push
}


print_message() {
	message=$1
	GREEN='\033[0;32m'
	NC='\033[0m' # No Color
	printf "${GREEN}$message${NC}\n"
}

deploy() {
	build_project
	commit "Update public dir with blog static files"
	push

	go_to "rafaelribeiro.dev_content"
	pull_submodule

	copy_files_to_submodule
	commit_and_push_to_submodule

	go_to ".."
	update_submodule

	print_message "Deploy finished with Success!"
}

# ========================== M A I N ==========================
deploy
