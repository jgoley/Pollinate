#Pollinate™

A marketplace for farmers where they can search for and hire beekeepers who offer pollination services.

##Solved problems:
Relieves the burden on both farmers and beekeepers of finding service/clients.

###Three user types: Beekeeper, Farmer & unauthorized

- **Beekeeper:**
	
	- As a beekeeper I should be able to **create an account (beekeeper type) or login**
	- As a beekeeper I should be able to **create a profile** with description of operation/bees
	- As a beekeeper I should set a geographic scope (how far they are willing to transport bees)
	- As a beekeeper I should be able to Create groups of hive that have different dates of availability and hive counts:
		- Number of hives
		- Cost per hive
		- Maximum travel distance before fee per mile
		- Fee per mile
		- Dates of availability
	- As a beekeeper I should receive an email notifying me of requests for bees
	- As a beekeeper I should be able to **view a list of requests and accept request**
	- As a beekeeper I should be able to **populate a list and map of farmers** who need pollination services
	- As a beekeeper I should be able to **contact farmers who need services**
	- As a beekeeper I should be able to **view history of contact (requests)**
	- As a beekeeper I should be able to **rate and review farmers**

- **Farmer:**
	- As a farmer I should be able to **create an account (farmer type) or login**.
	- As a farmer I should be able to create a profile.
	- As a farmer I should be able to choose to be added to a geotagged list of farmers who need pollination services (so that beekeepers can offer services).
	- As a farmer I should be able to **view a list and map of beekeepers** who have bees available in area or willing to travel to area.
	- As a farmer I should be able to **select a beekeeper, request hives and put in an offer** (sends an email to beekeeper with details and displays on *Offers* page).
	- As a farmer I should be able to review list of requests. (Filter by accepted, pending)
	- As a farmer I should be able to **rate and review beekeepers**.

- **Unauthorized user:**
	- As an unauthorized I should be able to search for beekeepers and farmers but view limited information (profile and basic info). 

### Routes

```js

'': 'index',
'login': 'login',
'newuser': 'newUser',

'account': 'account',
'user/:user_id': 'user',
'user/:user_id/reviews': 'reviews',
// 'user/:user_id/request': 'request',

'search/:type': 'search',

// 'hivegroups': 'hiveGroups',
// 'hivegroups/view/all': 'hiveGroupsAll',
// 'hivegroups/user/:user_id': 'hiveGroupsUser',
// 'hivegroup/:hiveGroup_id/view': 'viewHiveGroup',
// 'hivegroup/:hiveGroup_id/edit': 'editHiveGroup',
// 'hivegroup/add': 'addHiveGroup',


'bids': 'bidsIndex',
'bids/:bid_id': 'showBid',

'map': 'map'


```
### Maps
- Maps of beekeepers should show the geographic scope
- Maps of farmers should show location and distance from current location (or beekeepers default location)

