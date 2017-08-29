# Volunteer Hours - Component Hierarchy

## App Components

* App
* AppHeader

## Common Components

* Button (text, onClick)
* DateField (date)
* NumberField (number)
* TextField (text)
* NumberInputField (number)
* DateInputField (date)
* SelectInputField ([{text, value}], selectedValue)
* ActionButtons ([{text, onClick}])

## Page Components

* VolunteerHoursPage
	* HoursInputGrid (volunteerHours, students)
		* ColumnHeaders
		* HoursRows (collection)
			* HoursViewRow
				* StudentViewColumn
					* TextField (Student)
				* HoursViewColumn
					* NumberField (Hours)
				* DateViewColumn
					* DateField (Date)
				* DescriptionViewColumn
					* TextField (Description)
				* ActionButtonsViewColumn
					* ActionButtons (View)
						* Button (Edit)
						* Button (Delete)
			* HoursInputRow	
				* StudentEditColumn
					* SelectInputField (Student)
				* HoursEditColumn
					* NumberInputField (Hours)
				* DateEditColumn
					* DateInputField (Date)
				* DescriptionEditColumn
					* TextInputField (Description)
				* ActionButtonsEditColumn
					* ActionButtons (Edit)
						* Button (Cancel)
						* Button (Save)
		* GridFooter 
			* Button (Add)
