# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Check Your Understanding

1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not?

No, you would not use a unit test to test the "message" feature. Sending a message involves multiple components interacting together — the UI, the network, and the recipient's client. Unit tests are designed to test isolated pieces of code, not how components interact with each other, so an integration test would be more appropriate here.

2. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?

Yes, you would use a unit test to test the "max message length" feature. This is a simple, isolated function that takes an input (the message) and checks if it exceeds 80 characters. It has no dependencies on other components, making it a perfect candidate for a unit test.