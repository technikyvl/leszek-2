#!/bin/bash
# Script to automatically commit changes

cd "$(dirname "$0")"

# Check if there are any changes
if [ -n "$(git status --porcelain)" ]; then
    echo "Changes detected, committing..."
    git add -A
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "Changes committed successfully!"
    echo "You can now push from GitHub Desktop"
else
    echo "No changes to commit"
fi

