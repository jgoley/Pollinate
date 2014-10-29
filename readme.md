#Pollinate™

A marketplace for farmers where they can search for and hire beekeepers who offer pollination services.

##Solved problems:
Relieves the burden on both farmers and beekeepers of finding service/clients.

###Three user types: Beekeeper, Farmer & unauthorized

- **Beekeeper:**
	
	- As a beekeeper I should be able to **create an account (beekeeper type) or login**
	- As a beekeeper I should be able to **create a profile** with description of operation/bees
	- As a beekeeper I should set a geographic scope (how far they are willing to transport bees)
	- As a beekeeper I should be able to **create groups of hives** available for service
		- Number of hives in group
		- Cost per hive
		- Dates of availability
	- As a beekeeper I should be able to view a list of offers and accept or renegotiate offer (sends an email with counter offer and updates open offers of Farmer)
	- As a beekeeper I should be able to populate a list and map of farmers who need pollination services
	- As a beekeeper I should be able to contact farmers who need services
	- As a beekeeper I should be able to view history of contact (responses, rejections)

- **Farmer:**
	- As a farmer I should be able to **create an account (farmer type) or login**.
	- As a farmer I should be able to create a profile.
	- As a farmer I should be able to choose to be added myself to a geotagged list of farmers who need pollination services (so that beekeepers can offer services).
	- As a farmer I should be able to **view a list and map of beekeepers** who have bees available in area or willing to travel to area.
	- As a farmer I should be able to **select a beekeeper, request hives and put in an offer** (sends an email to beekeeper with details and displays on *Offers* page).
	- As a farmer I should be able to review list of offers. (Filter by accepted, pending, old)
	- As a farmer I should be able to **rate and review beekeepers**.

- **Unauthorized user:**
	- As an unauthorized I should be able to search for beekeepers and farmers but view limited information (profile and basic info). 

### Routes

- index 			// '/'
- login 			// 'login'
- newuser			// 'newuser'

- findIndex			// '/find/'
- findBeekeeper		// '/find/beekeeper'
- findFarmer		// '/find/farmer'

- user				// '/:user_id'
	- reviews		// '/reviews/:user_id'

- bids				// '/bids/'
- bids				// '/bids/:bid_id'


### Maps
- Maps of beekeepers should show the geographic scope
- Maps of farmers should show location and distance from current location (or beekeepers default location)

