# Proof of concept

## What I would like to do

When the user clicks a button in my `browser_action`-popup I would like to
create a new tab with a new url and after that inject a `content_script` into
that page.

## My approach (which is not working)

When the user clicks the button I send a message to my `background_script` with
the url. The background script then creates a new tab an executes the content
script in the newly created tab. And fails...

## Why it's not working

This can be fixed be extending the `permissions` to cover `<all_urls>`. But I
don't want that. It will make it look suspicious. I want it to only have the
`activeTab`-permission.

I guessing the reason it's not working is due to the fact that creating a new
tab is asynchronous and when I then try to execute the content script the the
connection between my click and the script execution is lost.

**If someone knows how to properly handle this please reach out to me!**
