# Volunteer Hours - Development Notes

## Component Hierarchy

The [component hierarchy](AppComponentTree.md) shows the React components being used in this application and how they fit together.

## Grid Notes

* A single add button allows a new row to be added (in edit mode)
* Buttons next to each row allow a row being viewed to be edited or deleted
* Buttons next to viewable rows are disabled when a row is in edit mode and that row does not pass validation. Those same buttons are enabled when the row does pass validation.
* The add button is also disabled when the row being edited does not pass validation
* Buttons next to the row in edit mode allow the edit to be cancelled or saved (Enter key saves, Escape key cancels)
* If a user adds or edits another row other than the row being edited, which can only happen when validation is successful, the row being edited is automatically saved.
* A row being edited that does not pass validation cannot be saved, only cancelled

## Misc Notes

* Not all browsers support the date input control. We'll have to obtain a datepicker in the future, but for now we'll rely on the text input.
* In order to avoid newline issues from working on different platforms, tell Git on Windows to convert CR/LF characters to LF characters by running "git config core.autocrlf true". This will cause any files in this project to be automatically converted to use LF characters when adding files. When developing on Mac and Linux operating systems, we won't need to do this, since those operating systems use LF characters in their files.