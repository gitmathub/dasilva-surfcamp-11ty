---
tags: bookingRequest
partial: form

contact:
  label: You Contact Details
firstName:
  label: First Name
lastName:
  label: Last Name
address:
  label: Address
phone:
  label: Telefone
  placeholder: +44 30 123 456 78
email:
  label: E-Mail
arrival:
  label: Arrival
departure:
  label: Departure
travelers:
  label: Additional Travelers 
evenMoreTravelers:
  hint: Please enter other travellers in the comment field below. Please also indicate how many children (up to 12 years) and babies (up to 2 years) are included.

package:
  label: Services
surfPackage1Week:
  label: 1 week Surf Package
mtbPackage1Week:
  label: 1 week MTB Package
SurfMtbPackage1Week:
  label: 1 week Surf & MTB Package
surfPackage2Weeks:
  label: 2 weeks Surf Package
mtbPackage2Weeks:
  label: 2 weeks MTB Package
SurfMtbPackage2Weeks:
  label: 2 weeks Surf & MTB Package
BedAndBreakfastOnly:
  label: only Bed & Breakfast
surfPackageOnly:
  label: only Surf Classes
mtbPackageOnly:
  label: only Mountainbiking

bedAndBreakfast:
  label: Bed and Breakfast
multiBedRoom:
  label: Shared Room
doubleRoom:
  label: Double Room
tinyHouse:
  label: Ensuite/ Tiny House
singleRoom:
  label: Single Room

bookingOptions:
  label: Booking Options
bookingRequest:
  label: This is only a request
bookFinally:
  label: I would like to make a binding booking
termsAndConditionAccepted:
  label: I have taken note of the terms and conditions
airportTransfer:
  label: We would like to be picked up from the airport.
airportTransferPrice:
  hint: Price for 1-2 persons = 80 € + 10 € additional person +20 EUR night charge bewtween 00:00am and 06:00 am.

comment:
  label: Comment

valueMissing:
  hint: Please specify
patternMismatch:
  email: Please check email

submit:
  label: Submit

---

### Da Silva Surf & Mountainbike Camp Portugal
# Booking Form

If you would like to spend your holiday with us and surf and/or mountain bike with us, please fill out the following form:

{% include "booking-form.njk" %}
