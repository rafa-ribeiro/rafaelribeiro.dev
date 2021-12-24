#!/bin/bash -e


build_project() {
	hugo
}

commit() {
	message=$1
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
	commit "New Blog Release on $date"
	git push origin HEAD:main
}

update_submodule() {
	git add rafaelribeiro.dev_content
	commit "Update submodule"
	push
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
}

# ========================== M A I N ==========================
deploy
