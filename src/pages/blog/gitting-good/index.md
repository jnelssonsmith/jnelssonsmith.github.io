---
title: Gitting good
date: "2015-05-28T22:40:32.169Z"
---

Using git via the command line is a bit of a funny thing, some lambast you, some make you out to be some sort of wizard for not using a GUI, and some think you’re flat out crazy. Whatever your opinion, I’m here to show that using the command line for git really isn’t as bad as a lot of people make it out to be, and I’ve found I can accomplish almost all of my day to day git tasks using as few as 15 commands - and of course you can too!

### __Tell me if you’ve heard this one before:__
<div class="quote">
<em>"Oh, you use the command line for git? I’ve always wanted to but never got around to learning it. &lt;insert git GUI app&gt; is just so easy, you know?"</em>
</div>

I hear this from my classmates and from my coworkers all the time. Now I want to clarify early that I am not seeking to invalidate peoples fears towards git and the command line in general - git is a power tool, full of features you will probably never need, and the internet is full of shitty git tutorials. So it’s understandable why people would have an aversion to it.

You also would’ve noticed that many (dare I say most) people get scared off early, or never use git through the command line at all. I certainly remember finding git to be too daunting as a first year, instead preferring to use a GUI, but after a few mistakes and a few more tutorials I returned to the command line and I think you should too.

<div class="quote">
<em>But why bother with the command line? GUI tools are just as good!</em>
</div>

It’s a valid question, there are some great, mature git GUI programs out there, gitKraken, tower, sourcetree etc, all get the job done fine. 
But they also __cost money__, the command line is __free__. I also believe that the reason you use something over another should not be because you don’t understand the other, but rather you have made an informed decision. Don’t get me wrong - git GUI’s are good, and can help with complex git workflows and large teams, but in general I would say they are overkill for the average small team project.

<div class="quote">
<em>Okay fine, but there’s so many commands, I can’t be expected/bothered to learn everything!</em>
</div>

What if I told you that there’s no real magic to accomplishing tasks with the command line, and that you can accomplish 99% of your day to day git tasks with only a few commands? Sure there are those fabled ‘git wizards’ at every workplace, __but I’m talking about the day to day stuff__, I bet if you took some time to break down what tasks you perform with git, it would be a fairly small list.

Git is an amazingly powerful tool, but a huge portion of the commands and features it includes you’ll never touch in your day to day work, if I had to look at the commands I use to accomplish 99% of my day to day work it would be a very short list. I took the time to do this and it turned out to be 15 in fact, so I have provided them here as proof that git isn’t all that scary — and you don’t need to be a command line prodigy to get through your day just using the command line.

### __99% of git tasks you’ll need to do covered in 15 commands__
---
__I want to see where I am, what my staged and unstaged commits are, what previous commits have occured__.

The first group of commands help with orientating us, they’re all super simple and very useful:

* `$ git status` - shows staged and unstaged changes, if there is any changes on the upstream branch
* `$ git log` - shows the history of commits, who committed them and the messages for each
* `$ git branch` - shows all the available local branches, useful when you don't quite remember a branch name

This shows all sorts of useful info, like what branch your on, if there are any changes on the remote copy of the branch you’re on and what changes you have staged or un-staged for commit. Think of this like your home-base, and whenever you get lost you can easily return here to get your bearings.

__I want to create a new feature branch and get to work__.

Most companies follow a similar git workflow, we create feature branches off of a master or develop branch, commit our changes and once the work is complete we

If in your git status call you found that there were changes in the remote repository you would be prompted to

* `$ git checkout <branch-name>` - first checkout the main branch
* `$ git pull` - we pull in changes if any have occurred so we are up to date
* `$ git checkout -b <new-branch-name>` - now we use the -b flag to create a new branch from the previous branch

__I want to commit changes and push them up to the remote repository__

This is perhaps the most well known group of commands, first we make some changes then:

* `$ git add .` - if we just want to add all changes, or you can replace the period with the specific files if you wish
* `$ git commit -m "your commit message goes here"` - we then commit our changes and add a message quickly with the -m flag
* `$ git push` - if you wish you can now push your local changes up to the remote repository

__I made a mistake!__

We all make mistakes and for such a complex tool, git is pretty forgiving. The most common mistake fixing commands I use are:

* `$ git branch -D <branch-name>` - this will delete a given branch: note that you should not be on the branch you wish to delete
* `$ git commit --amend -m "new message here"` - this will amend the commit message of your most recent commit
* `$ git reset --hard HEAD` - this will reset back to

__I need to merge my changes and changes in the upstream__
Perhaps the most daunting task for people using the command line is when merge conflicts arise, but the command is not scary at all

* `$ git merge <branch-to-merge-with>` - this will initiate the merge, if any merge conflicts arise then you'll need to open up your editor and choose between the incoming and current changes (or rewrite a combination of the two)

### __The niceties:__
These are a few things that are not necessary, but are nice to have and I’ve found myself using them a lot.

__I want to know who wrote this code__

In larger teams this is a lifesaver, often you’ll see a piece of code that is confusing, or you’ll see changes to your code that you didn’t write and you’ll wonder who changed it.

* `$ git blame <file>` - will open a view of the file with each line showing who edited each line last and when.

__I’ve written a bunch of commits, but don’t want to clutter my PR with them__
This is another common task I hear from people, especially when you’ve written a bunch of incremental changes that all really only constitute one piece of work. Well using the follow you can convert those many commits into one:

```p
$ git reset --soft HEAD~<number-of-commits>` - this will reset
$ git commit -m "new message"
```