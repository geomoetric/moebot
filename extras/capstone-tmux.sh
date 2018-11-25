#!/bin/sh 

# save in /usr/local/bin 

SESSION_NAME="Capstone"

cd /Users/EricMoe/Documents/_capstone/_generator/

tmux has-session -t ${SESSION_NAME}

if [ $? != 0 ]
then
  # Create the session
  tmux new-session -s ${SESSION_NAME} -n fullscr -d

  # Fullscreen (0)
  tmux send-keys -t ${SESSION_NAME} 'vim .' C-m

  # Document (1)
  tmux new-window -n documentation -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:1 'git status' C-m
  tmux split-window -h -t ${SESSION_NAME}:1
  tmux send-keys -t ${SESSION_NAME}:1.1 'vim README.md' C-m

  # Start out on the first window when we attach
  tmux select-window -t ${SESSION_NAME}:0
fi
tmux attach -t ${SESSION_NAME}

