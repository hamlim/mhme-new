#!/bin/bash

# Ask for the post title
echo -n "Name of the post?: "
read post

# Check if post title is empty, if so end the script without doing anything
if [ -z "$post" ]; then
    echo "You need to specify a post title"
    exit 0
else
    #Create a folder with the title; replace space with '-'
    notempty=${post// /-}
    mkdir "$notempty"
    cd $notempty
    touch index.md
    echo "---" >> index.md
    echo "title: $post" >> index.md
    echo "author: " >> index.md
    echo "date: $(date +'%Y-%m-%d')" >> index.md
    echo "tags: ['']" >> index.md
    echo "---" >> index.md
    exit 0
fi
