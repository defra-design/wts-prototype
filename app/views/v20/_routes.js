//const govukPrototypeKit = require('govuk-prototype-kit')
//const router = govukPrototypeKit.requests.setupRouter()
const govukPrototypeKit = require('govuk-prototype-kit')


const { red } = require('ansi-colors');
const router = govukPrototypeKit.requests.setupRouter()
var version = "v20";


router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'Move and track waste'
  next()
});


router.get('/index', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})



router.get('/setup-producer', function (req, res) {
  // Setup the data
  if (req.session.data['first_time'] != 'false') {
    // Clear all data
    req.session.data = {}

    // initiate for first time/restart
    req.session.data['have_waste'] = 'false'
    req.session.data['have_how_waste_produced'] = 'false'
    req.session.data['have_sic_code'] = 'false'
    req.session.data['have_hazard'] = 'false'
 //   req.session.data['first_add_component'] = 'true'
    req.session.data['add_hazard'] = ''
    req.session.data['add_container'] = ''

    req.session.data['ewc-waste-typeahead'] = "";

    req.session.data['have_physical_form'] = 'false'
    req.session.data['have_weight'] = 'false'
    req.session.data['container_asked_for'] = 'false'
    req.session.data['any_pops'] = 'false'

    req.session.data['producer_full_address'] = '';
    req.session.data['producer_address_line_1'] = 'Unit 15';
    req.session.data['producer_address_line_2'] = 'Berryedge Park';
    req.session.data['producer_address_town'] = 'Dunstable';
    req.session.data['producer_address_county'] = 'Bedfordshire';
    req.session.data['producer_postcode'] = 'LU5 4AX';
    req.session.data['producer_full_address_cya'] = '<ul class="govuk-list"><li>Unit 15</li><li>Dunstble</li><li>LU5 4AX</li></ul>'
    req.session.data['producer_contact_cya'] = '<ul class="govuk-list"><li>roger@Zathunicon.com</li><li>07123 456789</li>'
    req.session.data['producer_business_sic'] = '<ul class="govuk-list"><li>39000</li><li>Remediation activities and other waste management services</li>'

    req.session.data['receiver_full_address'] = '';
    req.session.data['receiver_address_line_1'] = '';
    req.session.data['receiver_address_line_2'] = '';
    req.session.data['receiver_address_town'] = '';
    req.session.data['receiver_address_county'] = '';

    req.session.data['waste_details_status'] = 'Not started'
    req.session.data['waste_details_status_class'] = 'govuk-tag--grey'
    req.session.data['container_status'] = 'Not started'
    req.session.data['container_status_class'] = 'govuk-tag--grey'
    req.session.data['waste_source_status'] = 'Not started'
    req.session.data['waste_source_status_class'] = 'govuk-tag--grey'
    req.session.data['waste_quantity_status'] = 'Not started'
    req.session.data['waste_quantity_status_class'] = 'govuk-tag--grey'
    req.session.data['usual-description-of-the-waste-status'] = "Not started";

    req.session.data['how_waste_produced_status'] = 'Not started'
    req.session.data['how_waste_produced_status_class'] = 'govuk-tag--grey'
    req.session.data['producer_details_status'] = 'Not started'
    req.session.data['producer_details_status_class'] = 'govuk-tag--grey'
    req.session.data['pick_up_status'] = 'Not started'
    req.session.data['pick_up_status_class'] = 'govuk-tag--grey'
    req.session.data['receiver_details_status'] = 'Not started'
    req.session.data['receiver_details_status_class'] = 'govuk-tag--grey'
    req.session.data['payment_status'] = 'Cannot start yet'
    req.session.data['payment_status_class'] = 'govuk-tag--grey'
    req.session.data['prod_and_loc_status'] = 'Not started'
    req.session.data['prod_and_loc_status_class'] = 'govuk-tag--grey'
    req.session.data['section_1_complete'] = 'no'
    req.session.data['section_2_complete'] = 'no'

    // initiate variables that are used as conditions to display information in the WIN. If we don't do this we get a blank line
    req.session.data['producer_business_name'] = ''
    req.session.data['receiver_business_name'] = ''
    req.session.data['pick_up_location'] = ''
    req.session.data['carrier_business_name'] = 'Boxes in a Flash'
    req.session.data['transport_type'] = ''

    // so we know the who started the note
    req.session.data['who_started'] = 'producer'

    // so we don't re-set when producer continues a note, rather than start one
    req.session.data['first_time'] = 'false'
  }

  // who is signed in
  req.session.data['producer_signed_in'] = 'true'
  req.session.data['carrier_signed_in'] = 'false'
  req.session.data['receiver_signed_in'] = 'false'

  res.redirect( 'setup-win' )
})

router.get('/setup-carrier', function (req, res) {
  // Setup the data
  if (req.session.data['first_time'] != 'false') {
    // Clear all data
    req.session.data = {}

    // initiate for first time/restart
    req.session.data['have_waste'] = 'false'
    req.session.data['have_how_waste_produced'] = 'false'
    req.session.data['have_sic_code'] = 'false'
    req.session.data['have_hazard'] = 'false'
   // req.session.data['first_add_component'] = 'true'
    req.session.data['add_hazard'] = ''
    req.session.data['add_container'] = ''
    req.session.data['have_physical_form'] = 'false'
    req.session.data['have_weight'] = 'false'
    req.session.data['container_asked_for'] = 'false'
    req.session.data['any_pops'] = 'false'

    req.session.data['ewc-waste-typeahead'] = "";

    req.session.data['producer_full_address'] = '';
    req.session.data['producer_address_line_1'] = '';
    req.session.data['producer_address_line_2'] = '';
    req.session.data['producer_address_town'] = '';
    req.session.data['producer_address_county'] = '';
    req.session.data['receiver_full_address'] = '';
    req.session.data['receiver_address_line_1'] = '';
    req.session.data['receiver_address_line_2'] = '';
    req.session.data['receiver_address_town'] = '';
    req.session.data['receiver_address_county'] = '';

    req.session.data['waste_details_status'] = 'Not started'
    req.session.data['waste_details_status_class'] = 'govuk-tag--grey'
    req.session.data['container_status'] = 'Not started'
    req.session.data['container_status_class'] = 'govuk-tag--grey'
    req.session.data['waste_source_status'] = 'Not started'
    req.session.data['waste_source_status_class'] = 'govuk-tag--grey'
    req.session.data['waste_quantity_status'] = 'Not started'
    req.session.data['waste_quantity_status_class'] = 'govuk-tag--grey'

    req.session.data['how_waste_produced_status'] = 'Not started'
    req.session.data['how_waste_produced_status_class'] = 'govuk-tag--grey'
    req.session.data['producer_details_status'] = 'Not started'
    req.session.data['producer_details_status_class'] = 'govuk-tag--grey'
    req.session.data['pick_up_status'] = 'Not started'
    req.session.data['pick_up_status_class'] = 'govuk-tag--grey'
    req.session.data['receiver_details_status'] = 'Not started'
    req.session.data['receiver_details_status_class'] = 'govuk-tag--grey'
    req.session.data['payment_status'] = 'Cannot start yet'
    req.session.data['payment_status_class'] = 'govuk-tag--grey'
    req.session.data['prod_and_loc_status'] = 'Not started'
    req.session.data['prod_and_loc_status_class'] = 'govuk-tag--grey'

    // initiate variables that are used as conditions to display information in the WIN. If we don't do this we get a blank line
    req.session.data['producer_business_name'] = ''
    req.session.data['receiver_business_name'] = ''
    req.session.data['pick_up_location'] = ''
    req.session.data['carrier_business_name'] = ''
    req.session.data['transport_type'] = ''

    // so we know the who started the note
    req.session.data['who_started'] = 'carrier'

    // so we don't re-set when carrier continues a note, rather than start one
    req.session.data['first_time'] = 'false'
  }

  // set-up user
  req.session.data['producer_signed_in'] = 'false'
  req.session.data['carrier_signed_in'] = 'true'
  req.session.data['receiver_signed_in'] = 'false'

  res.redirect( 'setup-win' )
})

router.get('/setup-receiver', function (req, res) {
  // Setup the data
  if (req.session.data['first_time'] != 'false') {
    // Clear all data
    req.session.data = {}

    // initiate for first time/restart
    req.session.data['have_waste'] = 'false'
    req.session.data['have_how_waste_produced'] = 'false'
    req.session.data['have_sic_code'] = 'false'
    req.session.data['have_hazard'] = 'false'
   // req.session.data['first_add_component'] = 'true'
    req.session.data['add_hazard'] = ''
    req.session.data['add_container'] = ''
    req.session.data['have_physical_form'] = 'false'
    req.session.data['have_weight'] = 'false'
    req.session.data['container_asked_for'] = 'false'
    req.session.data['any_pops'] = 'false'

    req.session.data['ewc-waste-typeahead'] = "";

    req.session.data['producer_full_address'] = '';
    req.session.data['producer_address_line_1'] = '';
    req.session.data['producer_address_line_2'] = '';
    req.session.data['producer_address_town'] = '';
    req.session.data['producer_address_county'] = '';
    req.session.data['receiver_full_address'] = '';
    req.session.data['receiver_address_line_1'] = '';
    req.session.data['receiver_address_line_2'] = '';
    req.session.data['receiver_address_town'] = '';
    req.session.data['receiver_address_county'] = '';

    req.session.data['waste_details_status'] = 'Not started'
    req.session.data['waste_details_status_class'] = 'govuk-tag--grey'
    req.session.data['container_status'] = 'Not started'
    req.session.data['container_status_class'] = 'govuk-tag--grey'
    req.session.data['waste_source_status'] = 'Not started'
    req.session.data['waste_source_status_class'] = 'govuk-tag--grey'
    req.session.data['waste_quantity_status'] = 'Not started'
    req.session.data['waste_quantity_status_class'] = 'govuk-tag--grey'

    req.session.data['how_waste_produced_status'] = 'Not started'
    req.session.data['how_waste_produced_status_class'] = 'govuk-tag--grey'
    req.session.data['producer_details_status'] = 'Not started'
    req.session.data['producer_details_status_class'] = 'govuk-tag--grey'
    req.session.data['pick_up_status'] = 'Not started'
    req.session.data['pick_up_status_class'] = 'govuk-tag--grey'
    req.session.data['receiver_details_status'] = 'Not started'
    req.session.data['receiver_details_status_class'] = 'govuk-tag--grey'
    req.session.data['payment_status'] = 'Cannot start yet'
    req.session.data['payment_status_class'] = 'govuk-tag--grey'
    req.session.data['prod_and_loc_status'] = 'Not started'
    req.session.data['prod_and_loc_status_class'] = 'govuk-tag--grey'

    // initiate variables that are used as conditions to display information in the WIN. If we don't do this we get a blank line
    req.session.data['producer_business_name'] = ''
    req.session.data['receiver_business_name'] = ''
    req.session.data['pick_up_location'] = ''
    req.session.data['carrier_business_name'] = ''
    req.session.data['transport_type'] = ''

    // so we know the who started the note
    req.session.data['who_started'] = 'receiver'

    // so we don't re-set when carrier continues a note, rather than start one
    req.session.data['first_time'] = 'false'
  }

  // set-up user
  req.session.data['producer_signed_in'] = 'false'
  req.session.data['carrier_signed_in'] = 'false'
  req.session.data['receiver_signed_in'] = 'true'

  res.redirect( 'setup-win' )
})


router.get('/setup-win', function (req, res) {
// Set up the status for each component of the waste information note

	// Cannot start yet = 'govuk-tag--grey'
	// Not started = 'govuk-tag--grey'
	// Locked = 'govuk-tag--grey'
	// In progress = 'govuk-tag--blue'
	// Completed = ''

  // //------------ for the PRODUCER ---------------------------
  if (req.session.data['producer_signed_in'] == 'true') {

    if (req.session.data['waste_details_status'] == 'Completed') {
      if (req.session.data['who_started'] == 'producer') {
        req.session.data['waste_details_status_class'] = ''
      } else {
        req.session.data['waste_details_status'] = 'Review'
        req.session.data['waste_details_status_class'] = 'govuk-tag--blue'
      }
    } else if (req.session.data['waste_details_status'] == 'In progress') {
      req.session.data['waste_details_status_class'] = 'govuk-tag--blue'
    } else {
      req.session.data['waste_details_status'] = 'Not started'
      req.session.data['waste_details_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['how_waste_produced_status'] == 'Completed') {
      if (req.session.data['who_started'] == 'producer') {
        req.session.data['how_waste_produced_status_class'] = ''
      } else {
        req.session.data['how_waste_produced_status'] = 'Review'
        req.session.data['how_waste_produced_status_class'] = 'govuk-tag--blue'
      }
    } else {
      req.session.data['how_waste_produced_status'] = 'Not started'
      req.session.data['how_waste_produced_status_class'] = 'govuk-tag--grey'
    }

	  if (req.session.data['producer_details_status'] == 'Completed') {
      if (req.session.data['who_started'] == 'producer') {
        req.session.data['producer_details_status_class'] = ''
      } else {
        req.session.data['producer_details_status'] = 'Review'
        req.session.data['producer_details_status_class'] = 'govuk-tag--blue'
      }
	  } else {
      req.session.data['producer_details_status'] = 'Review'
      req.session.data['producer_details_status_class'] = 'govuk-tag--blue'
      req.session.data['producer_business_name'] = 'Zathunicon'
	  }

    if (req.session.data['pick_up_status'] == 'Completed') {
      if (req.session.data['who_started'] == 'producer') {
        req.session.data['pick_up_status_class'] = ''
      } else {
        req.session.data['pick_up_status'] = 'Review'
        req.session.data['pick_up_status_class'] = 'govuk-tag--blue'
      }
    } else {
      req.session.data['pick_up_status'] = 'Not started'
      req.session.data['pick_up_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['receiver_details_status'] == 'Completed') {
      if (req.session.data['who_started'] == 'producer') {
        req.session.data['receiver_details_status_class'] = ''
      } else {
        req.session.data['receiver_details_status'] = 'Review'
        req.session.data['receiver_details_status_class'] = 'govuk-tag--blue'
      }
    } else {
      req.session.data['receiver_details_status'] = 'Not started'
      req.session.data['receiver_details_status_class'] = 'govuk-tag--grey'
    }

    req.session.data['payment_status'] = 'Cannot start yet'
    req.session.data['payment_status_class'] = 'govuk-tag--grey'

    if (req.session.data['carrier_details_status'] == 'Completed') {
      req.session.data['carrier_details_status'] = 'Review'
      req.session.data['carrier_details_status_class'] = 'govuk-tag--blue'
    } else {
      req.session.data['carrier_details_status'] = 'Not started'
      req.session.data['carrier_details_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['transportation_info_status'] == 'Completed') {
      req.session.data['transportation_info_status'] = 'Review'
      req.session.data['transportation_info_status_class'] = 'govuk-tag--blue'
    } else {
      req.session.data['transportation_info_status'] = 'Locked'
      req.session.data['transportation_info_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['carrier_confirmation_status'] == 'Completed') {
      req.session.data['carrier_confirmation_status_class'] = ''
    } else {
      req.session.data['carrier_confirmation_status'] = 'Locked'
      req.session.data['carrier_confirmation_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['producer_confirmation_status'] == 'Completed') {
      req.session.data['producer_confirmation_status_class'] = ''
    } else if ((req.session.data['waste_details_status'] == "Completed") &&
          (req.session.data['how_waste_produced_status'] == "Completed") &&
          (req.session.data['producer_details_status'] == "Completed") &&
          (req.session.data['pick_up_status'] == "Completed") &&
          (req.session.data['receiver_details_status'] == "Completed") &&
          (req.session.data['carrier_details_status'] == "Completed") &&
          (req.session.data['transportation_info_status'] == "Completed")) {
      req.session.data['producer_confirmation_status'] = 'Not started'
      req.session.data['producer_confirmation_status_class'] = 'govuk-tag--grey'
    } else {
      req.session.data['producer_confirmation_status'] = 'Cannot start yet'
      req.session.data['producer_confirmation_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['receiver_confirmation_status'] == 'Completed') {
      req.session.data['receiver_confirmation_status_class'] = ''
    } else {
      req.session.data['receiver_confirmation_status'] = 'Locked'
      req.session.data['receiver_confirmation_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['recovery_code_status'] == 'Completed') {
      req.session.data['recovery_code_status_class'] = ''
    } else {
      req.session.data['recovery_code_status'] = 'Locked'
      req.session.data['recovery_code_status_class'] = 'govuk-tag--grey'
    }
	}

	//------------ for the CARRIER ---------------------------
	else if (req.session.data['carrier_signed_in'] == 'true') {
	  if (req.session.data['waste_details_status'] == 'Completed') {
	    req.session.data['waste_details_status'] = 'Review'
      req.session.data['waste_details_status_class'] = 'govuk-tag--blue'
    }

    if (req.session.data['how_waste_produced_status'] == 'Completed') {
      req.session.data['how_waste_produced_status'] = 'Review'
      req.session.data['how_waste_produced_status_class'] = 'govuk-tag--blue'
    }

    if (req.session.data['pick_up_status'] == 'Completed') {
      req.session.data['pick_up_status'] = 'Review'
      req.session.data['pick_up_status_class'] = 'govuk-tag--blue'
    }

    if (req.session.data['receiver_details_status'] == 'Completed') {
      req.session.data['receiver_details_status'] = 'Review'
      req.session.data['receiver_details_status_class'] = 'govuk-tag--blue'
    }

	  if (req.session.data['carrier_details_status'] == 'Completed') {
	    req.session.data['carrier_details_status_class'] = ''
	  } else {
      req.session.data['carrier_details_status'] = 'Review'
      req.session.data['carrier_details_status_class'] = 'govuk-tag--blue'
      req.session.data['carrier_business_name'] = 'Boxes in a Flash'
	  }

    req.session.data['transportation_info_status'] = 'Not started'
    req.session.data['transportation_info_status_class'] = 'govuk-tag--grey'

    if (req.session.data['carrier_confirmation_status'] == 'Completed') {
      req.session.data['carrier_confirmation_status_class'] = ''
    } else if ((req.session.data['carrier_details_status'] == "Completed") &&
              (req.session.data['transportation_info_status'] == "Completed") &&
              (req.session.data['carrier_confirmation_status'] == 'Completed')) {
      req.session.data['carrier_confirmation_status'] = 'Not started'
      req.session.data['carrier_confirmation_status_class'] = 'govuk-tag--grey'
    } else {
      req.session.data['carrier_confirmation_status'] = 'Cannot start yet'
      req.session.data['carrier_confirmation_status_class'] = 'govuk-tag--grey'
    }

	  if (req.session.data['producer_confirmation_status'] == 'Completed') {
	    req.session.data['producer_details_status_class'] = ''
	  } else {
      req.session.data['producer_confirmation_status'] = 'Locked'
      req.session.data['producer_confirmation_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['receiver_confirmation_status'] == 'Completed') {
      req.session.data['receiver_confirmation_status_class'] = ''
    } else {
      req.session.data['receiver_confirmation_status'] = 'Locked'
      req.session.data['receiver_confirmation_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['recovery_code_status'] == 'Completed') {
      req.session.data['recovery_code_status_class'] = ''
    } else {
      req.session.data['recovery_code_status'] = 'Locked'
      req.session.data['recovery_code_status_class'] = 'govuk-tag--grey'
    }
  }

	// //------------ for the RECEIVER ---------------------------
  else if (req.session.data['receiver_signed_in'] == 'true') {
	  if (req.session.data['waste_details_status'] == 'Completed') {
	    req.session.data['waste_details_status'] = 'Review'
      req.session.data['waste_details_status_class'] = 'govuk-tag--blue'
    }

    if (req.session.data['how_waste_produced_status'] == 'Completed') {
      req.session.data['how_waste_produced_status'] = 'Review'
      req.session.data['how_waste_produced_status_class'] = 'govuk-tag--blue'
    }

    if (req.session.data['receiver_details_status'] == 'Completed') {
      req.session.data['receiver_details_status'] = 'Review'
      req.session.data['receiver_details_status_class'] = 'govuk-tag--blue'
    }

	  if (req.session.data['carrier_details_status'] == 'Completed') {
      req.session.data['carrier_details_status'] = 'Review'
      req.session.data['carrier_details_status_class'] = 'govuk-tag--blue'
	  }

    if (req.session.data['transportation_info_status'] == 'Completed') {
      req.session.data['transportation_info_status'] = 'Review'
      req.session.data['transportation_info_status_class'] = 'govuk-tag--blue'
    }

    if (req.session.data['carrier_confirmation_status'] == 'Completed') {
      req.session.data['carrier_confirmation_status_class'] = ''
    } else {
      req.session.data['carrier_confirmation_status'] = 'Locked'
      req.session.data['carrier_confirmation_status_class'] = 'govuk-tag--grey'
    }

  	if (req.session.data['producer_confirmation_status'] == 'Completed') {
  	  req.session.data['producer_details_status_class'] = ''
  	}
  	else {
      req.session.data['producer_confirmation_status'] = 'Locked'
      req.session.data['producer_confirmation_status_class'] = 'govuk-tag--grey'
    }

    if (req.session.data['receiver_confirmation_status'] == 'Completed') {
      req.session.data['receiver_confirmation_status_class'] = ''
    } else if ((req.session.data['producer_confirmation_status'] == 'Completed') &&
              (req.session.data['recovery_code_status'] == 'Completed')) {
      req.session.data['receiver_confirmation_status'] = 'Not started'
      req.session.data['receiver_confirmation_status_class'] = 'govuk-tag--grey'
    } else {
      req.session.data['receiver_confirmation_status'] = 'Cannot start yet'
      req.session.data['receiver_confirmation_status_class'] = 'govuk-tag--grey'
    }

  	if (req.session.data['recovery_code_status'] == 'Completed') {
  	  req.session.data['recovery_code_status'] = ''
  	} else {
      req.session.data['recovery_code_status'] = 'Not started'
      req.session.data['recovery_code_status_class'] = 'govuk-tag--grey'
    }
  }

  res.redirect( 'start-waste-record' )
})


//------------------------------------------------------//

// CHOOSE PROTOTYPE ROUTE
  router.post('/journey-select', function(req, res) {
    if (req.session.data['prototype-route'] == 'producer') {
        res.redirect('index-start');
    } else if (req.session.data['prototype-route'] == 'carrier') {
        res.redirect('index-start');
    } else if (req.session.data['prototype-route'] == 'receiver') {
        res.redirect('index-start');
    }
  })


// ------- GOV GATEWAY SIGNIN
  router.post('/gov-gateway-signin', function(req, res) {
    res.redirect('index-homepage')
  })


 // ------- WASTE ROLE SELECT 
  router.post('/waste-role-multiple', function(req, res) {
    res.redirect('unique-reference');
  });
  

// ------- UNIQUE REFERENCE NUMBER
  router.post('/unique-reference', function(req, res) {
    res.redirect('start-waste-record');
  });
  


// ------- TASK LIST
router.post('/start-waste-record', function(req, res) {
// will need to add checks here to make sure the right page is shown, depending on where in the journey the user is

  if (req.session.data['C'] == 'no') {

    // check the status of each part and show the relevant page
    if (req.session.data['waste_details_status'] != 'Completed') {
      res.redirect('ewc-code');
    }
    if (req.session.data['container_status'] != 'Completed') {
      res.redirect('container');
    }
    if (req.session.data['waste_source_status'] != 'Completed') {
      res.redirect('waste-source');
    }
    if (req.session.data['waste_quantity_status'] != 'Completed') {
      res.redirect('quantity-of-waste');
    }
  /* } else { // section 1 is complete
    if (req.session.data['section_2_complete'] == 'no') {
      res.redirect('section-2-confirm')
    } */
  }
})


/* ------- OLD TASK LIST FROM V17
router.post('/waste-info-note', function(req, res) {
  // will need to add checks here to make sure the right page is shown, depending on where in the journey the user is

    if (req.session.data['section_1_complete'] == 'no') {

      // check the status of each part and show the relevant page
      if (req.session.data['waste_details_status'] != 'Completed') {
        res.redirect('waste');
      }
      if (req.session.data['prod_and_loc_status'] != 'Completed') {
        res.redirect('producer');
      }
      if (req.session.data['receiver_details_status'] != 'Completed') {
        res.redirect('receiver-contact');
      }
      if (req.session.data['carrier_details_status'] != 'Completed') {
        res.redirect('carrier-details');
      }
    } else { // section 1 is complete
      if (req.session.data['section_2_complete'] == 'no') {
        res.redirect('section-2-confirm')
      }
    }
  })
 */


// --------------------------------------------------------------------------------------------------------

// ABOUT THE WASTE
// Waste details

// This page starts by asking for the EWC code

//------ EWC code 
//router.post('/ewc-code', function(req, res) {
//    res.redirect('waste-description');
//});


//-------- EWC ADD ANOTHER
router.post('/ewc-add-another', function(req, res) {
  if (req.session.data['add-ec-code'] == 'Yes') {
      res.redirect('ewc-code-2');
  } else if (req.session.data['add-ec-code'] == 'No') {
          res.redirect('waste-description');
  }
  })

//-----------------------------

//-------- NEW MULTIPLE EWC PATTERN FOR TESTING

//-------- EWC CODE 
router.post('/ewc-code', function(req, res) {
      res.redirect('waste-description');
  
  })

//-------- EWC CODE 2
router.post('/ewc-code-2', function(req, res) {
  res.redirect('waste-description-2');

})

//-------- EWC CODE 3
router.post('/ewc-code-3', function(req, res) {
  res.redirect('waste-description-3');

})

//-------- EWC ADD ANOTHER (CARD)
router.post('/ewc-add-another-card-1', function(req, res) {
  if (req.session.data['add-ewc-item'] == 'Yes') {
      res.redirect('ewc-code-2');
  } else if (req.session.data['add-ewc-item'] == 'No') {
          res.redirect('container-description');
  }
  })

//-------- EWC ADD ANOTHER (CARD) - (2 cards)
router.post('/ewc-add-another-card-2', function(req, res) {
  if (req.session.data['add-ewc-item-2'] == 'Yes') {
      res.redirect('ewc-code-3');
  } else if (req.session.data['add-ewc-item-2'] == 'No') {
          res.redirect('container-description');
  }
  })

  //-------- EWC ADD ANOTHER (CARD) - (3 cards)
router.post('/ewc-add-another-card-3', function(req, res) {
  if (req.session.data['add-ewc-item-3'] == 'Yes') {
      res.redirect('container-description');
  } else if (req.session.data['add-ewc-item-3'] == 'No') {
          res.redirect('container-description');
  }
  })

//-----------------------------------------------------------

// WASTE DESCRIPTION
router.post('/waste-description', function(req, res) {
  req.session.data['usual-description-of-the-waste-status'] = "Completed";
      res.redirect('physical-form');
})

// WASTE DESCRIPTION 2
router.post('/waste-description-2', function(req, res) {
  req.session.data['usual-description-of-the-waste-status'] = "Completed";
      res.redirect('physical-form-2');
})

// WASTE DESCRIPTION 3
router.post('/waste-description-3', function(req, res) {
  req.session.data['usual-description-of-the-waste-status'] = "Completed";
      res.redirect('physical-form-3');
})

//-----------------------------------------------------------

// PHYSICAL FORM
router.post('/physical-form', function(req, res) {
  res.redirect('quantity-of-waste')
})

// PHYSICAL FORM 2
router.post('/physical-form-2', function(req, res) {
  res.redirect('quantity-of-waste-2')
})

// PHYSICAL FORM 3
router.post('/physical-form-3', function(req, res) {
  res.redirect('quantity-of-waste-3')
})

//-----------------------------------------------------------

// HAZARD CODE
router.post('/hazard-code', function(req, res) {
	res.redirect('pops-check');
})

// HAZARD CODE 2
router.post('/hazard-code-2', function(req, res) {
	res.redirect('pops-check-2');
})

// HAZARD CODE 3
router.post('/hazard-code-3', function(req, res) {
	res.redirect('pops-check-3');
})

 




//-----------------------------------------------------------------

//--- HANDLING REQUIREMENT CHECK
router.post('/handling-check', function(req, res) {
  if (req.session.data['handling-require'] == 'yes') {
      res.redirect('handling-requirements');
  } else if (req.session.data['handling-require'] == 'no') {
          res.redirect('check-answers-aboutwaste');
  }
  })

 //--- HANDLINE REQUIREMENTS
router.post('/handling-requirements', function(req, res) {
	res.redirect( 'check-answers-aboutwaste' )
})

/* // any pops
router.post('/pops', function(req, res) {
  req.session.data['any_pops'] = 'true'
	res.redirect( 'waste-check-answers' )
}) */

/* //--- CONTAIN POPS
router.post('/pops-check', function(req, res) {
  if (req.session.data['pops'] == 'yes') {
      res.redirect('handling-requirements');
  } else if (req.session.data['pops'] == 'no') {
          res.redirect('pops');
  }
  }) */

//--- New Pops pattern based on EWC typeahead
//------------------------

//------ POPS code counter 1
router.post('/pops-check', function(req, res) {

  if(req.session.data['pop-check']=='yes'){
    if(typeof req.session.data['pops-count'] == "undefined"){
      req.session.data['pops-count'] = 0;
    }
    else {
      req.session.data['pops-count']++;
    }

    req.session.data['pops-'+req.session.data['pops-count']] = req.session.data['pops-typeahead'];
    res.redirect('pops-playback');
  }
  else if (req.session.data['pop-check']=='no') {
    res.redirect('ewc-add-another-card-1');
  }
});

router.get('/pops-playback', function (req, res) {
var popsArray = [];

for (var i = 0; i <= req.session.data['pops-count']; i++) {
popsArray[i] = req.session.data['pops-'+i];
}

res.render(version+'/pops-playback', {
'pops' : popsArray });
});

router.post('/pops-add-another', function(req, res) {
  if(typeof req.session.data['pops-count'] == "undefined"){
    req.session.data['pops-count'] = 0;
  }
  else {
    req.session.data['pops-count']++;
  }

  req.session.data['pops-'+req.session.data['pops-count']] = req.session.data['pops-typeahead'];
  res.redirect('pops-playback');
});


//-------- POPS ADD ANOTHER
router.post('/pops-playback', function(req, res) {
  if (req.session.data['add-pop'] == 'Yes') {
      res.redirect('pops-add-another');
  } else if (req.session.data['add-pop'] == 'No') {
          res.redirect('ewc-add-another-card-1');
  }
  })

//----------------------------

//------ POPS code counter 2
router.post('/pops-check-2', function(req, res) {

  if(req.session.data['pop-check-2']=='yes'){
    if(typeof req.session.data['pops-count-2'] == "undefined"){
      req.session.data['pops-count-2'] = 0;
    }
    else {
      req.session.data['pops-count-2']++;
    }

    req.session.data['pops-'+req.session.data['pops-count-2']] = req.session.data['pops-typeahead-2'];
    res.redirect('pops-playback-2');
  }
  else if (req.session.data['pop-check-2']=='no') {
    res.redirect('ewc-add-another-card-2');
  }
});

router.get('/pops-playback-2', function (req, res) {
var popsArray = [];

for (var i = 0; i <= req.session.data['pops-count-2']; i++) {
popsArray[i] = req.session.data['pops-'+i];
}

res.render(version+'/pops-playback-2', {
'pops-2' : popsArray });
});

router.post('/pops-add-another-2', function(req, res) {
  if(typeof req.session.data['pops-count-2'] == "undefined"){
    req.session.data['pops-count-2'] = 0;
  }
  else {
    req.session.data['pops-count-2']++;
  }

  req.session.data['pops-'+req.session.data['pops-count-2']] = req.session.data['pops-typeahead-2'];
  res.redirect('pops-playback-2');
});


//-------- POPS ADD ANOTHER 3
router.post('/pops-playback-3', function(req, res) {
  if (req.session.data['add-pop-3'] == 'Yes') {
      res.redirect('pops-add-another-3');
  } else if (req.session.data['add-pop-3'] == 'No') {
          res.redirect('ewc-add-another-card-3');
  }
  })


//----------------------------

//------ POPS code counter 3
router.post('/pops-check-3', function(req, res) {

  if(req.session.data['pop-check-3']=='yes'){
    if(typeof req.session.data['pops-count-3'] == "undefined"){
      req.session.data['pops-count-3'] = 0;
    }
    else {
      req.session.data['pops-count-3']++;
    }

    req.session.data['pops-'+req.session.data['pops-count-3']] = req.session.data['pops-typeahead-3'];
    res.redirect('pops-playback-3');
  }
  else if (req.session.data['pop-check-3']=='no') {
    res.redirect('ewc-add-another-card-3');
  }
});

router.get('/pops-playback-3', function (req, res) {
var popsArray = [];

for (var i = 0; i <= req.session.data['pops-count-3']; i++) {
popsArray[i] = req.session.data['pops-'+i];
}

res.render(version+'/pops-playback-3', {
'pops-3' : popsArray });
});

router.post('/pops-add-another-3', function(req, res) {
  if(typeof req.session.data['pops-count-3'] == "undefined"){
    req.session.data['pops-count-3'] = 0;
  }
  else {
    req.session.data['pops-count-3']++;
  }

  req.session.data['pops-'+req.session.data['pops-count-3']] = req.session.data['pops-typeahead-3'];
  res.redirect('pops-playback-3');
});


//-------- POPS ADD ANOTHER 3
router.post('/pops-playback-3', function(req, res) {
  if (req.session.data['add-pop-3'] == 'Yes') {
      res.redirect('pops-add-another-3');
  } else if (req.session.data['add-pop-3'] == 'No') {
          res.redirect('ewc-add-another-card-3');
  }
  })

//-----------------------------------------------------------------

//--- CONTAINER
router.post('/container-description', function(req, res) {
    res.redirect('handling-check');
})


//-----------------------------------------------

//--- WASTE SOURCE
router.post('/waste-source', function(req, res) {
  if (req.session.data['source-type'] == 'Household') {
    res.redirect('waste-source-household');

} else if (req.session.data['source-type'] == 'Commercial') {
    res.redirect('waste-source-commercial');

}  else if (req.session.data['source-type'] == 'Industrial') {
    res.redirect('waste-source-industrial');

}  else if (req.session.data['source-type'] == 'Fly-tipped') {
    res.redirect('producer-transport-select');

} else if (req.session.data['source-type'] == 'Unknown') {
    res.redirect('producer-transport-select');
}
})

//--- WASTE SOURCE - HOUSEHOLD
router.post('/waste-source-household', function(req, res) {
  res.redirect('producer-transport-select');
})

//--- WASTE SOURCE - COMMERCIAL
router.post('/waste-source-commercial', function(req, res) {
  res.redirect('producer-transport-select');
})

//--- WASTE SOURCE - INDUSTRIAL
router.post('/waste-source-industrial', function(req, res) {
  res.redirect('producer-transport-select');
})



//-----------------------------------------------

// WASTE QUANTITY (weight and volume)
router.post('/quantity-of-waste', function(req, res) {
  if (req.session.data['waste-amount'] == 'actual-kg') {
      res.redirect('quantity-weight-actual-kg');

  } else if (req.session.data['waste-amount'] == 'estimate-kg') {
      res.redirect('quantity-weight-estimate-kg');

  }  else if (req.session.data['waste-amount'] == 'actual-litre') {
      res.redirect('quantity-volume-actual-litre');

  }  else if (req.session.data['waste-amount'] == 'estimate-litre') {
      res.redirect('quantity-volume-estimate-litre');

  } else if (req.session.data['waste-amount'] == 'unknown') {
      res.redirect('hazard-code');
}

})

//--- QUANTITY - ACTUAL KG
router.post('/quantity-weight-actual-kg', function(req, res) {
  res.redirect('hazard-code');
})

//--- QUANTITY - ESTIMATE KG
router.post('/quantity-weight-estimate-kg', function(req, res) {
  res.redirect('hazard-code');
})

//--- QUANTITY - ACTUAL LITRE
router.post('/quantity-volume-actual-litre', function(req, res) {
  res.redirect('hazard-code');
})

//--- QUANTITY - ESTIMATE LITRE
router.post('/quantity-volume-estimate-litre', function(req, res) {
  res.redirect('hazard-code');
})

//---------------

// WASTE QUANTITY (weight and volume) 2
router.post('/quantity-of-waste-2', function(req, res) {
  if (req.session.data['waste-amount-2'] == 'actual-kg') {
      res.redirect('quantity-weight-actual-kg-2');

  } else if (req.session.data['waste-amount-2'] == 'estimate-kg') {
      res.redirect('quantity-weight-estimate-kg-2');

  }  else if (req.session.data['waste-amount-2'] == 'actual-litre') {
      res.redirect('quantity-volume-actual-litre-2');

  }  else if (req.session.data['waste-amount-2'] == 'estimate-litre') {
      res.redirect('quantity-volume-estimate-litre-2');

  } else if (req.session.data['waste-amount-2'] == 'unknown') {
      res.redirect('hazard-code-2');
}

})

//--- QUANTITY - ACTUAL KG
router.post('/quantity-weight-actual-kg-2', function(req, res) {
  res.redirect('hazard-code-2');
})

//--- QUANTITY - ESTIMATE KG
router.post('/quantity-weight-estimate-kg-2', function(req, res) {
  res.redirect('hazard-code-2');
})

//--- QUANTITY - ACTUAL LITRE
router.post('/quantity-volume-actual-litre-2', function(req, res) {
  res.redirect('hazard-code-2');
})

//--- QUANTITY - ESTIMATE LITRE
router.post('/quantity-volume-estimate-litre-2', function(req, res) {
  res.redirect('hazard-code-2');
})

//----------------

// WASTE QUANTITY (weight and volume) 3
router.post('/quantity-of-waste-3', function(req, res) {
  if (req.session.data['waste-amount-3'] == 'actual-kg') {
      res.redirect('quantity-weight-actual-kg-3');

  } else if (req.session.data['waste-amount-3'] == 'estimate-kg') {
      res.redirect('quantity-weight-estimate-kg-3');

  }  else if (req.session.data['waste-amount-3'] == 'actual-litre') {
      res.redirect('quantity-volume-actual-litre-3');

  }  else if (req.session.data['waste-amount-3'] == 'estimate-litre') {
      res.redirect('quantity-volume-estimate-litre-3');

  } else if (req.session.data['waste-amount-3'] == 'unknown') {
      res.redirect('hazard-code-3');
}

})

//--- QUANTITY - ACTUAL KG
router.post('/quantity-weight-actual-kg-3', function(req, res) {
  res.redirect('hazard-code-3');
})

//--- QUANTITY - ESTIMATE KG
router.post('/quantity-weight-estimate-kg-3', function(req, res) {
  res.redirect('hazard-code-3');
})

//--- QUANTITY - ACTUAL LITRE
router.post('/quantity-volume-actual-litre-3', function(req, res) {
  res.redirect('hazard-code-3');
})

//--- QUANTITY - ESTIMATE LITRE
router.post('/quantity-volume-estimate-litre-3', function(req, res) {
  res.redirect('hazard-code-3');
})


//-----------------------------------------------


//--- CHECK ANSWERS (ABOUT WASTE)
router.post('/check-answers-aboutwaste', function(req, res) {
  if (req.session.data['section-aboutwaste-complete'] == 'Yes') {
      res.redirect('waste-record-aboutwaste-prepopulated');
  } else if (req.session.data['section-aboutwaste-complete'] == 'No') {
          res.redirect('start-waste-record');
  }  
})

/* //--- CHECK ANSWERS (SECTION 2)
router.post('/check-answers-producer', function(req, res) {
  if (req.session.data['section-producer-complete'] == 'Yes') {
      res.redirect('waste-record-producer-complete');
  } else if (req.session.data['section-producer-complete'] == 'No') {
          res.redirect('start-waste-record');
  }  
}) */

//--- CHECK ANSWERS (PRODUCER DETAILS)
router.post('/check-answers-producer', function(req, res) {
  if (req.session.data['section-producer-complete'] == 'Yes') {
      res.redirect('waste-record-producer-complete');
  } else if (req.session.data['section-producer-complete'] == 'No') {
          res.redirect('start-waste-record');
  }  
})

//--- CHECK ANSWERS (CARRIER DETAILS)
router.post('/check-answers-carrier', function(req, res) {
  if (req.session.data['section-carrier-complete'] == 'Yes') {
      res.redirect('waste-record-carrier-prepopulated');
  } else if (req.session.data['section-carrier-complete'] == 'No') {
          res.redirect('start-waste-record');
  }  
})

//--- CHECK ANSWERS (RECIEVER DETAILS)
router.post('/check-answers-receiver', function(req, res) {
  if (req.session.data['section-receiver-complete'] == 'Yes') {
      res.redirect('waste-record-receiver-complete');
  } else if (req.session.data['section-receiver-complete'] == 'No') {
          res.redirect('start-waste-record');
  }  
})


// WASTE RECORD TASKLIST - COMPELTED SECTIONS

//--- RECEIVER SECTION COMPLETE
router.post('/waste-record-receiver-complete', function(req, res) {
  res.redirect('waste-record-submitted-success');
})

//--- RECEIVER SECTION COMPLETE 2 *** hard coded entries to jump sections ***
router.post('/waste-record-receiver-prepopulated', function(req, res) {
  res.redirect('waste-record-submitted-success');
})

//--- CARRIER SECTION COMPLETE
router.post('/waste-record-carrier-prepopulated', function(req, res) {
  res.redirect('waste-record-updated-success');
})


  

/* router.get('/container', function (req, res) {
  if (req.session.data['container_asked_for'] == "true" ){
	  back_link = 'waste'
  } else {
	  back_link = 'weight'
  }

  res.render( './' + req.originalUrl, {
	  back_link: back_link
  } )
})

router.post('/container', function(req, res) {
  req.session.data['container_asked_for'] = "true"
  req.session.data['container_cya'] = "Not provided" // could be tidier!

  if (req.session.data['container_type'] != "" ){
	  req.session.data['container_cya'] = req.session.data['container_type']
  } else {
	  req.session.data['container_cya'] = 'Container type not provided'
  }
  if (req.session.data['container_quantity'] != "" ){
	  req.session.data['container_cya'] = req.session.data['container_quantity'] + ' X ' + req.session.data['container_cya']
  }

  if (req.session.data['first_container'] != 'false') {
    // create a list for the component to go in, if we don't already have one.
    req.session.data['container_list'] = []
    req.session.data['first_container'] = 'false'
  }

  // add the new component and details to the list
  req.session.data['container_list'].push({container: req.session.data['container_type'], quantity: req.session.data['container_quantity']})

  // reset the variables for next time through
  req.session.data['container_type'] = ''
  req.session.data['container_quantity'] = ''

  // build some table html to show all the components
  var table_html = ''
  table_html = '<table class="govuk-table"><thead class="govuk-table__head"><tr class="govuk-table__row">'
  table_html = table_html + '<th scope="col" class="govuk-table__header app-custom-class">Container</th>'
  table_html = table_html + '<th scope="col" class="govuk-table__header app-custom-class">Quantity</th>'
  table_html = table_html + '<th scope="col" class="govuk-table__header app-custom-class"></th>'
  table_html = table_html + '</tr></thead>'
  table_html = table_html + '<tbody class="govuk-table__body">'
  // add a row for each item in the list
  for (let i = 0; i < req.session.data['container_list'].length; i++ ){
    table_html = table_html + '<tr class="govuk-table__row" id="thisRow">'
    table_html = table_html + '<th scope="row" class="govuk-table__header">' + req.session.data['container_list'][i].container + '</th>'
    table_html = table_html + '<td class="govuk-table__cell">' + req.session.data['container_list'][i].quantity +'</th>'
    table_html = table_html + '<td class="govuk-table__cell"><a>Change</a></th>'
    table_html = table_html + '</tr>'
  }
  table_html = table_html + '</tbody></table>'

  req.session.data['container_table_html'] = table_html

  // direct to add another, or move to weight
  if (req.session.data['add_container'] == "yes") {
    req.session.data['add_container'] = ''
    res.redirect('add-container');
  } else {
    req.session.data['add_container'] = ''
    res.redirect('weight')
  }
  res.redirect( 'weight' );
})

router.post('/add-container', function(req, res) {
  res.redirect( 'weight' );
}) */

//-----------------------------------------------


////-------- PRODUCER AND COLLECTION ------------

//--- CONFIRM PRODUCER
router.post('/producer-prepopulate', function(req, res) {
  if (req.session.data['producer-details-preprop'] == 'Yes') {
      res.redirect('producer-collect-same');
  } else if (req.session.data['producer-details-preprop'] == 'No') {
          res.redirect('producer-contact');
  }  
})

//--- COLLECTION SAME AS PRODUCER
router.post('/producer-collect-same', function(req, res) {
  if (req.session.data['producer-collect-same'] == 'Yes') {
      res.redirect('waste-source');
  } else if (req.session.data['producer-collect-same'] == 'No') {
          res.redirect('collect-postcode');
  }  
})

//--- PRODUCER CONTACT DETAILS ENTER MANUALLY
router.post('/producer-contact', function(req, res) {
          res.redirect('producer-sic');
})

//--- PRODUCER SIC ENTER MANUALLY
router.post('/producer-sic', function(req, res) {
  res.redirect('producer-postcode');
})

//--- PRODUCER POSTCODE LOOKUP
router.post('/producer-postcode', function(req, res) {
  res.redirect('producer-address-select');
})

//--- PRODUCER ADDRESS SELECT
router.post('/collect-address-select', function(req, res) {
  res.redirect('collect-address-check');
})

//--- PRODUCER ADDRESS ENTER MANUALLY
router.post('/producer-address-select', function(req, res) {
  res.redirect('producer-address-check');
})

//--- COLLECTION SAME AS PRODUCER - MANUAL
router.post('/producer-address-check', function(req, res) {
  if (req.session.data['producer-collect-same2'] == 'Yes') {
      res.redirect('check-answers-section3');
  } else if (req.session.data['producer-collect-same2'] == 'No') {
          res.redirect('collect-postcode');
  }  
})

//--- COLLECTION POSTCODE LOOKUP
router.post('/collect-postcode', function(req, res) {
  res.redirect('collect-address-select');
})

//--- COLLECTION ADDRESS SELECT
router.post('/collect-address-select', function(req, res) {
  res.redirect('collect-address-check');
})

//--- COLLECTION ADDRESS CHECK
router.post('/collect-address-check', function(req, res) {
  res.redirect('waste-source');
})

//--- COLLECTION ADDRESS ENTER MANUALLY
router.post('/collect-address-manual', function(req, res) {
  res.redirect('collect-address-check');
})

//--- PRODUCER TRANSPORT SELECT
router.post('/producer-transport-select', function(req, res) {
  res.redirect('check-answers-producer');
})

//-----------------------------------------------


////-------- CARRIER DETAILS ------------

//--- CONFIRM CARRIER
router.post('/carrier-prepopulate', function(req, res) {
  if (req.session.data['carrier-details-preprop'] == 'Yes') {
      res.redirect('carrier-confirm-date');
  } else if (req.session.data['carrier-details-preprop'] == 'No') {
          res.redirect('carrier-contact');
  }  
})


//--- CARRIER CONTACT DETAILS ENTER MANUALLY
router.post('/carrier-contact', function(req, res) {
          res.redirect('carrier-registration');
})

//--- CARRIER REGISTRATION ENTER MANUALLY
router.post('/carrier-registration', function(req, res) {
  res.redirect('carrier-postcode');
})

//--- CARRIER POSTCODE LOOKUP
router.post('/carrier-postcode', function(req, res) {
  res.redirect('carrier-address-select');
})

//--- CARRIER ADDRESS ENTER MANUALLY
router.post('/carrier-address-select', function(req, res) {
  res.redirect('carrier-address-check');
})

//--- CARRIER ADDRESS CHECK
router.post('/carrier-address-check', function(req, res) {
  res.redirect('carrier-confirm-date');
})

//--- CARRIER ADDRESS ENTER MANUALLY
router.post('/carrier-address-manual', function(req, res) {
  res.redirect('check-answers-carrier');
})


//--- CARRIER COLLECTION DATE
router.post('/carrier-confirm-date', function(req, res) {
  res.redirect('check-answers-carrier');
})



//-----------------------------------------------


////-------- RECEIVER DETAILS ------------

//--- CONFIRM RECEIVER
router.post('/receiver-prepopulate', function(req, res) {
  if (req.session.data['receiver-details-preprop'] == 'Yes') {
      res.redirect('receiver-final-same');
  } else if (req.session.data['receiver-details-preprop'] == 'No') {
          res.redirect('receiver-contact');
  }  
})

//--- FINAL DESTINATION SAME AS RECEIVER
router.post('/receiver-final-same', function(req, res) {
  if (req.session.data['receiver-final-same'] == 'Yes') {
      res.redirect('check-answers-receiver');
  } else if (req.session.data['receiver-final-same'] == 'No') {
          res.redirect('receiver-final-postcode');
  }  
})

//--- RECEIVER CONTACT DETAILS ENTER MANUALLY
router.post('/receiver-contact', function(req, res) {
          res.redirect('receiver-permit');
})

//--- RECEIVER PERMIT
router.post('/receiver-permit', function(req, res) {
  res.redirect('receiver-exemption');
})

//--- RECEIVER EXEMPTION
router.post('/receiver-exemption', function(req, res) {
  res.redirect('receiver-postcode');
})

//--- RECEIVER POSTCODE LOOKUP
router.post('/receiver-postcode', function(req, res) {
  res.redirect('receiver-address-select-2'); //----- added '-2' to the url for alpha
})

//--- RECEIVER ADDRESS SELECT
router.post('/receiver-address-select-2', function(req, res) { //----- added '-2' to the url for alpha
  res.redirect('receiver-address-check-2'); //----- added '-2' to the url for alpha
})

//--- RECEIVER ADDRESS ENTER MANUALLY
router.post('/receiver-address-manual', function(req, res) {
  res.redirect('receiver-address-check');
})


//--- FINAL DESTINATION SAME AS RECEIVER - MANUAL
router.post('/receiver-address-check-2', function(req, res) {
  if (req.session.data['receiver-final-same2'] == 'Yes') {
      res.redirect('check-answers-receiver');
  } else if (req.session.data['receiver-final-same2'] == 'No') {
          res.redirect('receiver-final-postcode');
  }  
})

//--- FINAL DESTINATION POSTCODE LOOKUP
router.post('/receiver-final-postcode', function(req, res) {
  res.redirect('receiver-final-address-select');
})

//--- FINAL DESTINATION ADDRESS SELECT
router.post('/receiver-final-address-select', function(req, res) {
  res.redirect('receiver-final-address-check');
})

//--- FINAL DESTINATION ADDRESS CHECK
router.post('/receiver-final-address-check', function(req, res) {
  res.redirect('check-answers-reciever');
})

//--- FINAL DESTINATION ADDRESS - MANUAL
router.post('/receiver-final-address-manual', function(req, res) {
  res.redirect('check-answers-reciever');
})



//-----------------------------------------------

// How the waste was produced
// Waste produced
router.get('/waste-produced', function (req, res) {
  res.render( './' + req.originalUrl, {
	  back_link: 'waste-info-note'
  } )
})

router.post('/waste-produced', function(req, res) {
  if (req.session.data['how_waste_produced'] != ""){
	  req.session.data['have_how_waste_produced'] = "true"
	}

  res.redirect( 'sic-code');
})

// SIC code
router.post('/sic-code', function(req, res) {
  if (req.session.data['how_waste_produced_status'] == 'Review') {
    req.session.data['how_waste_produced_status'] = 'Completed'
    req.session.data['how_waste_produced_status_class'] = "";
  }


  if (req.session.data['sic_info'] != ""){
    req.session.data['have_how_waste_produced'] = "true"

    // get the details from the .json file into a list
    var sic_codes_list = require('./sic-codes.json')
    sic_codes_list = JSON.parse(JSON.stringify(sic_codes_list))

    var sic_info_list = ''
    for (var i = 0; i < sic_codes_list.length; i++) {
      this_sic_code = sic_codes_list[i].SIC_code

      if (req.session.data['sic_info'] == this_sic_code) {
        this_sic_desc = sic_codes_list[i].Description
        this_sic_info = this_sic_code + ': ' + this_sic_desc
        break;
      }
    }

    req.session.data['sic_info'] = this_sic_info
    req.session.data['sic_code'] = this_sic_code
    req.session.data['sic_description'] = this_sic_desc
    req.session.data['have_sic_code'] = "true"

    if (req.session.data['have_how_waste_produced'] == "true"){
      req.session.data['how_waste_produced_status'] = "Completed"
      req.session.data['how_waste_produced_status_class'] = ""
    } else {
      req.session.data['how_waste_produced_status'] = "In progress"
      req.session.data['how_waste_produced_status_class'] = "govuk-tag--blue"
    }
  }

 // res.redirect( 'waste-info-note' );
  res.redirect( 'pick-up' );
})

// SIC code
router.post('/sic-code-check-answers', function(req, res) {
  if (req.session.data['how_waste_produced_status'] == 'Review') {
    req.session.data['how_waste_produced_status'] = 'Completed'
    req.session.data['how_waste_produced_status_class'] = "";
  }

  res.redirect( 'waste-info-note' );
})



// Producer contact details
router.get('/producer', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/producer', function(req, res) {
  if (req.session.data['producer_details_status'] == 'Review') {
    req.session.data['producer_details_status'] = 'Completed'
    req.session.data['producer_details_status_class'] = "";
  }

  if (req.session.data['producer_details_status'] != 'Completed') {
    req.session.data['producer_details_status'] = "In progress";
    req.session.data['producer_details_status_class'] = "govuk-tag--blue";

    // go to page to select the address
    res.redirect( 'producer-address' );
  } else {
   // res.redirect( 'waste-info-note' );
    res.redirect( 'sic-code' );
  }
})

router.post('/producer-address', function(req, res) {
  if (req.session.data['producer_details_status'] != 'Completed') {
    req.session.data['producer_details_status'] = "In progress";
    req.session.data['producer_details_status_class'] = "govuk-tag--blue";
  }

  if (req.session.data['producer_full_address'] != '') {
    full_address = req.session.data['producer_full_address'];
    // add each comma separated string into an array
    const address_items = full_address.split(",");
    // As we hard coded the addresses shown, we know the format is line 1, town, postcode.
    req.session.data['producer_address_line_1'] = address_items[0];
    req.session.data['producer_address_town'] = address_items[1];
    req.session.data['producer_postcode'] = address_items[2];

  	// make the 'Check answers' version of the producers address
    producer_full_address_cya = '<ul class="govuk-list"><li>' + req.session.data['producer_address_line_1'] + '</li>'

    if (req.session.data['producer_address_line_2'] != '') {
      producer_full_address_cya = producer_full_address_cya + '<li>' + req.session.data['producer_address_line_2'] + '</li>'
    }
    if (req.session.data['producer_address_town'] != '') {
      producer_full_address_cya = producer_full_address_cya + '<li>' + req.session.data['producer_address_town'] + '</li>'
    }
    if (req.session.data['receiver_address_county'] != '') {
      producer_full_address_cya = producer_full_address_cya + '<li>' + req.session.data['producer_address_county'] + '</li>'
    }
    if (req.session.data['producer_postcode'] != '') {
      producer_full_address_cya = producer_full_address_cya + '<li>' + req.session.data['producer_postcode'] + '</li>'
    }
    producer_full_address_cya = producer_full_address_cya + '</ul>'

    req.session.data['producer_full_address_cya'] = producer_full_address_cya
  }

  // go to the page to continue adding details
  res.redirect( 'producer-details' );
})

router.post('/producer-address-manual', function(req, res) {
  if (req.session.data['producer_details_status'] != 'Completed') {
    req.session.data['producer_details_status'] = "Completed";
    req.session.data['producer_details_status_class'] = "";
  }

  // go to the page to continue adding details
  res.redirect( 'producer-address-check' );
})

router.post('/producer-details', function(req, res) {
  // make the contact details check your answers (cya) version
  producer_contact_cya = '<ul class="govuk-list"><li>' + req.session.data['producer_contact_name'] + '</li>' +
          '<li>' + req.session.data['producer_contact_email'] + '</li>' +
          '<li>' + req.session.data['producer_contact_phone'] + '</li></ul>'
  req.session.data['producer_contact_cya'] = producer_contact_cya

  if ((req.session.data['producer_contact_name'] == '') || (req.session.data['producer_contact_email'] == '')
        || (req.session.data['producer_contact_phone'] == '') || (req.session.data['producer_business_name'] == '')) {
    req.session.data['producer_details_status'] = "In progress";
    req.session.data['producer_details_status_class'] = "govuk-tag--blue";
  } else {
    req.session.data['producer_details_status'] = "Completed";
    req.session.data['producer_details_status_class'] = "";
  }

  // go back to the win
  res.redirect( 'waste-info-note' );
})


// Producer business name
// Right now this is the only bit of data the user can change in the 'Producer contact details' page
router.get('/producer-business-name', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/producer-business-name', function(req, res) {
  res.redirect( 'waste-info-note' );
})



// Pick up information
router.get('/pick-up', function (req, res) {
 // console.log('Pick up: '+req.session.data['pick_up_location'])
  // req.session.data['pick_up_status'] = "In progress";
  // req.session.data['pick_up_status_class'] = "govuk-tag--blue";
  res.render( './' + req.originalUrl, {} )
})

router.post('/pick-up', function(req, res) {
  if (req.session.data['pic_up_location'] != ""){
    req.session.data['pick_up_status'] = "Completed";
    req.session.data['pick_up_status_class'] = "";
  } else {
    req.session.data['pick_up_status'] = "In progress"
    req.session.data['pick_up_status_class'] = "govuk-tag--blue"
  }

// bit of a hack to get the production and location status to set correctly
  if ((req.session.data['producer_details_status'] == 'Completed') && (req.session.data['pick_up_status'] == 'Completed')) {
    req.session.data['prod_and_loc_status'] = 'Completed'
    req.session.data['prod_and_loc_status_class'] = ''
  } else {
    if ((req.session.data['producer_details_status'] == 'In progress') || (req.session.data['pick_up_status'] == 'In progress')) {
      req.session.data['prod_and_loc_status'] = 'In Progress'
      req.session.data['prod_and_loc_status_class'] = 'govuk-tag--blue'
    }
  }

  res.redirect( 'waste-info-note' );
})

router.post('/producer-location-check-answers', function (req, res) {
  res.redirect( 'waste-info-note' );
})


// Carrier contact information
router.get('/carrier-details', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/carrier-details', function(req, res) {
  req.session.data['carrier_details_status'] = "Completed";
  req.session.data['carrier_details_status_class'] = "";

  res.redirect( 'transportation' );
})

router.post('/carrier-check-answers', function (req, res) {
  res.redirect( 'waste-info-note' );
})


// Receiver contact information
router.get('/receiver-contact', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/receiver-contact', function(req, res) {
  if (req.session.data['receiver_details_status'] == 'Review') {
    req.session.data['receiver_details_status'] = 'Completed'
    req.session.data['receiver_details_status_class'] = "";
  }

  if (req.session.data['receiver_details_status'] != 'Completed') {
    req.session.data['receiver_details_status'] = "In progress";
    req.session.data['receiver_details_status_class'] = "govuk-tag--blue";

    // go to page to select the address
    res.redirect( 'receiver-address' );
  } else {
    res.redirect( 'waste-info-note' );
  }
})

router.post('/receiver-address', function(req, res) {
  if (req.session.data['receiver_details_status'] != 'Completed') {
    req.session.data['receiver_details_status'] = "In progress";
    req.session.data['receiver_details_status_class'] = "govuk-tag--blue";
  }

  if (req.session.data['receiver_full_address'] != '') {
    full_address = req.session.data['receiver_full_address'];
    // add each comma separated string into an array
    const address_items = full_address.split(",");
    // As we hard coded the addresses shown, we know the format is line 1, town, postcode.
    req.session.data['receiver_address_line_1'] = address_items[0];
    req.session.data['receiver_address_town'] = address_items[1];
    req.session.data['receiver_postcode'] = address_items[2];

  	// make the 'Check answers' version of the receivers address
    receiver_full_address_cya = '<ul class="govuk-list"><li>' + req.session.data['receiver_address_line_1'] + '</li>'

    if (req.session.data['receiver_address_line_2'] != '') {
      receiver_full_address_cya = receiver_full_address_cya + '<li>' + req.session.data['receiver_address_line_2'] + '</li>'
    }
    if (req.session.data['receiver_address_town'] != '') {
      receiver_full_address_cya = receiver_full_address_cya + '<li>' + req.session.data['receiver_address_town'] + '</li>'
    }
    if (req.session.data['receiver_address_county'] != '') {
      receiver_full_address_cya = receiver_full_address_cya + '<li>' + req.session.data['receiver_address_county'] + '</li>'
    }
    if (req.session.data['receiver_postcode'] != '') {
      receiver_full_address_cya = receiver_full_address_cya + '<li>' + req.session.data['receiver_postcode'] + '</li>'
    }
    receiver_full_address_cya = receiver_full_address_cya + '</ul>'

    req.session.data['receiver_full_address_cya'] = receiver_full_address_cya
  }

  // go to the page to continue adding details
  res.redirect( 'receiver-details' );
})

router.post('/receiver-address-manual', function(req, res) {
  if (req.session.data['receiver_details_status'] != 'Completed') {
    req.session.data['receiver_details_status'] = "Completed";
    req.session.data['receiver_details_status_class'] = "";
  }

  // go to the page to continue adding details
  res.redirect( 'receiver-details' );
})

router.post('/receiver-details', function(req, res) {
  // make the contact details check your answers (cya) version
//  if (req.session.data['receiver_contact_name'] != '') {
//    receiver_contact_cya = '<ul class="govuk-list"><li>' + req.session.data['receiver_contact_name'] + '</li>'
//  }
//  if (req.session.data['receiver_contact_email'] != '') {
//
//  }
    receiver_contact_cya = '<ul class="govuk-list"><li>' + req.session.data['receiver_contact_name'] + '</li>' +
          '<li>' + req.session.data['receiver_contact_email'] + '</li>' +
          '<li>' + req.session.data['receiver_contact_phone'] + '</li></ul>'
    req.session.data['receiver_contact_cya'] = receiver_contact_cya

  if ((req.session.data['receiver_contact_name'] == '') || (req.session.data['receiver_contact_email'] == '')
        || (req.session.data['receiver_contact_phone'] == '') || (req.session.data['receiver_business_name'] == '')) {
    req.session.data['receiver_details_status'] = "In progress";
    req.session.data['receiver_details_status_class'] = "govuk-tag--blue";
  } else {
    req.session.data['receiver_details_status'] = "Completed";
    req.session.data['receiver_details_status_class'] = "";
  }

  // move to ask for the permit number
  res.redirect( 'receiver-permit' );
})

router.post('/receiver-permit', function(req, res) {
  // return to the win
  res.redirect( 'waste-info-note' );
})


// Transportation information
router.get('/transportation', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/transportation', function(req, res) {
  req.session.data['transportation_info_status'] = "Completed";
  req.session.data['transportation_info_status_class'] = "";

// BODGE FOR NOW TO GET CORRECT CONFIRMATION TO SHOW
  if ((req.session.data['waste_details_status'] == "Completed") && (req.session.data['container_status']== "Completed")
      && (req.session.data['waste_source_status'] == "Completed") && (req.session.data['waste_quantity_status'] == "Completed")) {
    req.session.data['section_1_complete'] = 'yes'
  }

  res.redirect( 'start-waste-record' );
})

router.post('/transportation-check-answers', function(req, res) {
  req.session.data['transportation_info_status'] = "Completed";
  req.session.data['transportation_info_status_class'] = "";

  // BODGE FOR NOW TO GET LINK FOR CONFIRMATION TO SHOW
    // allow producer to confirm and sign his part of the duty of care
    if (req.session.data['producer_confirmation_status'] == 'Completed') {
      req.session.data['producer_confirmation_status_class'] = ''
    } else if ((req.session.data['carrier_details_status'] == "Completed") && (req.session.data['transportation_info_status'] == "Completed")
          && (req.session.data['carrier_confirmation_status'] == 'Completed')) {
      req.session.data['producer_confirmation_status'] = 'Not started'
      req.session.data['producer_confirmation_status_class'] = 'govuk-tag--grey'
    }

  res.redirect( 'waste-info-note' );
})


// Carrier confirmation
router.get('/carrier-confirmation', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/carrier-confirmation', function(req, res) {
  req.session.data['carrier_confirmation_status'] = 'Completed';
  req.session.data['carrier_confirmation_status_class'] = "";

  res.redirect( 'waste-info-note' );
})



// producer confirmation
router.get('/producer-confirmation', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/producer-confirmation', function(req, res) {
  req.session.data['producer_confirmation_status'] = "Completed";
  req.session.data['producer_confirmation_status_class'] = "";

  res.redirect( 'waste-info-note' );
})



// Waste management information
router.get('/waste-management', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/waste-management', function(req, res) {
  var recovery_code = req.session.data['recovery_code']
  var recovery_code_provided = 'false'

  // if an R or D code was entered...
  if (recovery_code != '' ){
    // Apply Postel's law: "be conservative in what you do, be liberal in what you accept from others"
    // Remove any spaces - this is using a regex to catch all whitespace
    recovery_code = recovery_code.replace(/\s/g,'')
    // uppercase any letters entered
    recovery_code = recovery_code.toUpperCase()

    // get the data from the JSON file
    var recovery_code_list = require('./r&d-codes.json')
    recovery_code_list = JSON.parse(JSON.stringify(recovery_code_list))
    var recovery_code_text = ''

    for (let i = 0; i < recovery_code_list.length; i++ ){
      this_recovery_code = recovery_code_list[i].Code.trim()

      if (this_recovery_code == recovery_code) { // the code provided is in the list of valid codes
        recovery_code_provided = 'true'
        recovery_code_text = recovery_code_list[i].Relates_To; // don't currently use this, but added code whilst here!
        break;
      }
    } // end the for loop

    // if the R or D code entered was in the list, it's valid, go back to the WIN
    if (recovery_code_provided == 'true') {
      req.session.data['recovery_code'] = recovery_code
      req.session.data['recovery_code_text'] = recovery_code_text
      req.session.data['recovery_code_provided'] = "true"
      req.session.data['recovery_code_status'] = "Completed";
      req.session.data['recovery_code_status_class'] = "";
      req.session.data['recovery_info'] = recovery_code + ': ' + recovery_code_text

      res.redirect( 'waste-info-note' );
    } else { // the code provided wasn't valid, reshow the page with an error message
      req.session.data['recovery_code_provided'] = "false"
      res.redirect('waste-management');
    }

  } else {  // no R or D code entered, reshow the page with an error message
	  req.session.data['recovery_code_provided'] = 'false'
	  res.redirect('waste-management');
  }
})

router.post('/waste-management-check-answers', function(req, res) {
  res.redirect( 'waste-info-note' );
})


// receiver confirmation
router.get('/receiver-confirmation', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})

router.post('/receiver-confirmation', function(req, res) {
  req.session.data['receiver_confirmation_status'] = "Completed";
  req.session.data['receiver_confirmation_status_class'] = "";

  res.redirect( 'waste-info-note' );
})


//-----------------------------------------------

////-------- RECEIVER CONFIRM ------------

//--- RECEIVER WASTE CONFIRMATION
router.post('/receiver-confirm', function(req, res) {
  if (req.session.data['confirm-record-correct'] == 'Yes') {
      res.redirect('receiver-confirm-date');
  } else if (req.session.data['confirm-record-correct'] == 'No') {
          res.redirect('receiver-amend-reject');
  }
})  

//--- RECEIVER AMEND/REJECT
router.post('/receiver-amend-reject', function(req, res) {
  if (req.session.data['amend-reject'] == 'amend-waste') {
      res.redirect('receiver-amend-record');
  } else if (req.session.data['amend-reject'] == 'reject-waste') {
          res.redirect('receiver-reject-waste');
  }
})  

//--- RECEIVER AMEND RECORD
router.post('/receiver-amend-record', function(req, res) {
  res.redirect('receiver-confirm-date');
})

//--- RECEIVER AMEND WEIGHT
router.post('/receiver-weight-change', function(req, res) {
  res.redirect('receiver-amend-record-2');
})

//--- RECEIVER AMEND RECORD 2
router.post('/receiver-amend-record-2', function(req, res) {
  res.redirect('receiver-confirm-date');
})


//--- RECEIVER CONFIRM QUANTITY
router.post('/receiver-confirm-quantity', function(req, res) {
    res.redirect('receiver-confirm-date');
  })

//--- RECEIVER CONFIRM DATE
router.post('/receiver-confirm-date', function(req, res) {
  res.redirect('receiver-treatment-same');
})

//--- RECEIVER TREATMENT SELECT (Same D&R codes or not)
router.post('/receiver-treatment-same', function(req, res) {
  if (req.session.data['receiver-treatwaste-same'] == 'yes') {
    res.redirect('receiver-RDcode-add');
} else if (req.session.data['receiver-treatwaste-same'] == 'no') {
        res.redirect('receiver-RDcode-add-multiple');
}
  
})

////-------- WASTE TREATMENT RECOVERY & DISPOSAL CODES ------------
/* 
    //------ R&D CODE SELECT
    router.post('/receiver-RDcode-select', function(req, res) {

        if(typeof req.session.data['RDcode-count'] == "undefined"){
          req.session.data['RDcode-count'] = 0;
        }
        else {
          req.session.data['RDcode-count']++;
        }

        req.session.data['RDcode-'+req.session.data['RDcode-count']] = req.session.data['recovery-operation-final-typeahead'];
        res.redirect('receiver-RDcode-add-another');
      
    });

    //------ R&D CODE PLAYBACK AND ADD ANOTHER

    router.get('/receiver-RDcode-add-another', function (req, res) {
      var carrierArray = [];

      for (var i = 0; i <= req.session.data['RDcode-count']; i++) {
      carrierArray[i] = req.session.data['RDcode-'+i];
      }
      
      res.render(version+'/receiver-RDcode-add-another', {
      'RDcodes' : carrierArray });
      });

      
      
      router.post('/receiver-RDcode-2', function(req, res) {
        if(typeof req.session.data['RDcode-count'] == "undefined"){
          req.session.data['RDcode-count'] = 0;
        }
        else {
          req.session.data['RDcode-count']++;
        }
      
        req.session.data['RDcode-'+req.session.data['RDcode-count']] = req.session.data['recovery-operation-final-typeahead'];
        res.redirect('receiver-RDcode-add-another');
      });
 */
/* 
     //-------- R&D ADD ANOTHER
    router.post('/receiver-RDcode-add-another', function(req, res) {
      if (req.session.data['add-RDcode'] == 'Yes') {
          res.redirect('receiver-RDcode-2');
      } else if (req.session.data['add-RDcode'] == 'No') {
              res.redirect('check-answers-section7');
      }
      }); 
 */

  ////-------- WASTE TREATMENT RECOVERY & DISPOSAL CODES v2 ------------

    //------ R&D CODE SELECT (ALL WASTE)
    router.post('/receiver-RDcode-add', function(req, res) {

      if(typeof req.session.data['RDcode-count'] == "undefined"){
        req.session.data['RDcode-count'] = 0;
      }
      else {
        req.session.data['RDcode-count']++;
      }

      req.session.data['RDcode-'+req.session.data['RDcode-count']] = req.session.data['recovery-operation-final-typeahead'];
    
 
  //------ R&D CODE PLAYBACK 

    var carrierArray = [];

    for (var i = 0; i <= req.session.data['RDcode-count']; i++) {
    carrierArray[i] = req.session.data['RDcode-'+i];
    }
    
    res.render(version+'/receiver-RDcode-add', {
    'RDcodes' : carrierArray });
    });


    //----------------------------------------------------------------


    //------ R&D CODE SELECT (MULTIPLE)
    //router.post('/receiver-RDcode-add-multiple', function(req, res) {

    //---- FIRST WASTE ITEM

      router.post('/RDcode1', function(req, res) {

        if(typeof req.session.data['RDcode1-count'] == "undefined"){
          req.session.data['RDcode1-count'] = 0;
        }
        else {
          req.session.data['RDcode1-count']++;
        }
  
        req.session.data['RDcode1-'+req.session.data['RDcode1-count']] = req.session.data['recovery-operation-typeahead-1'];
        req.session.data['recovery-operation-typeahead-1'] = "" //---- refreshes the typeahead after a selection has been made

        var RDcode1Array = [];

        for (var i = 0; i <= req.session.data['RDcode1-count']; i++) { 
          RDcode1Array[i] = req.session.data['RDcode1-'+i]; 
          }
  
       req.session.data.RDcodes1 = RDcode1Array
          res.redirect('receiver-RDcode-add-multiple')

      });
      
  
    //---- SECOND WASTE ITEM
   
      router.post('/RDcode2', function(req, res) {
  
        if(typeof req.session.data['RDcode2-count'] == "undefined"){
          req.session.data['RDcode2-count'] = 0; 
        }
        else {
          req.session.data['RDcode2-count']++;  
        }

        req.session.data['RDcode2-'+req.session.data['RDcode2-count']] = req.session.data['recovery-operation-typeahead-2'];
        req.session.data['recovery-operation-typeahead-2'] = "" //---- refreshes the typeahead after a selection has been made

        var RDcode2Array = [];
 
        for (var i = 0; i <= req.session.data['RDcode2-count']; i++) { 
          RDcode2Array[i] = req.session.data['RDcode2-'+i];
        }      
  
        req.session.data.RDcodes2 = RDcode2Array
          res.redirect('receiver-RDcode-add-multiple')
  
      });


    //---- THIRD WASTE ITEM
   
      router.post('/RDcode3', function(req, res) {
  
        if(typeof req.session.data['RDcode3-count'] == "undefined"){
          req.session.data['RDcode3-count'] = 0; 
        }
        else {
          req.session.data['RDcode3-count']++;  
        }

        req.session.data['RDcode3-'+req.session.data['RDcode3-count']] = req.session.data['recovery-operation-typeahead-3'];
        req.session.data['recovery-operation-typeahead-3'] = "" //---- refreshes the typeahead after a selection has been made

        var RDcode3Array = [];
 
        for (var i = 0; i <= req.session.data['RDcode3-count']; i++) { 
          RDcode3Array[i] = req.session.data['RDcode3-'+i];
        }      
  
        req.session.data.RDcodes3 = RDcode3Array
          res.redirect('receiver-RDcode-add-multiple')
  
      });
  
  
      //GET PAGE
  
      router.get('/receiver-RDcode-add-multiple', function(req, res) {
  
            res.render(version + '/receiver-RDcode-add-multiple')
  
      });

      //----

      

     /*  if(typeof req.session.data['RDcode1-count'] == "undefined"){
        req.session.data['RDcode1-count'] = 0;
      }
      else {
        req.session.data['RDcode1-count']++;
      }
      req.session.data['RDcode1-'+req.session.data['RDcode1-count']] = req.session.data['recovery-operation-typeahead-1'];


      if(typeof req.session.data['RDcode2-count'] == "undefined"){
        req.session.data['RDcode2-count'] = 0;
      }
      else {
        req.session.data['RDcode2-count']++;
      }
      req.session.data['RDcode2-'+req.session.data['RDcode2-count']] = req.session.data['recovery-operation-typeahead-2'];


      if(typeof req.session.data['RDcode3-count'] == "undefined"){
        req.session.data['RDcode3-count'] = 0;
      }
      else {
        req.session.data['RDcode3-count']++;
      }
      req.session.data['RDcode3-'+req.session.data['RDcode3-count']] = req.session.data['recovery-operation-typeahead-3'];
    
 
  //------ R&D CODE PLAYBACK AND ADD ANOTHER

    var RDcode1Array = [];
    var RDcode2Array = [];
    var RDcode3Array = [];

    for (var i = 0; i <= req.session.data['RDcode1-count']; i++) {
    RDcode1Array[i] = req.session.data['RDcode1-'+i];
    }

    for (var i = 0; i <= req.session.data['RDcode2-count']; i++) {
    RDcode2Array[i] = req.session.data['RDcode2-'+i];
    }

    for (var i = 0; i <= req.session.data['RDcode3-count']; i++) {
    RDcode3Array[i] = req.session.data['RDcode3-'+i];
    }
    
    res.render(version+'/receiver-RDcode-add-multiple', {
    'RDcodes1' : RDcode1Array, 
    'RDcodes2' : RDcode2Array,
    'RDcodes3' : RDcode3Array  });
 */



  //});

    

////-------- RECEIVER CHECK ANSWERS ------------

//--- WASTE CONFIRM CHECK ANSWERS
router.post('/check-answers-receiverconfirm', function(req, res) {
  res.redirect('waste-record-receiverconfirm-prepopulated');
})

//--- WASTE RECORD COMPLETE CONFIRMATION
router.post('/waste-record-receiverconfirm-prepopulated', function(req, res) {
  res.redirect('waste-record-complete-success');
})




////-------- MULTIPLE WASTE RECORDS (BULK UPLOADS) ------------

router.post('/bulk-interrupt', function(req, res) {
  res.redirect('bulk-upload');
})

router.post('/bulk-guidance', function(req, res) {
  res.redirect('bulk-upload');
})

// bulk file upload
router.post('/bulk-upload', function(req, res) {
  res.redirect('bulk-uploading-1');
})

// bulk error upload 1
router.post('/bulk-errors-1', function(req, res) {
  res.redirect('bulk-uploading-2');
})

// bulk error upload 2
router.post('/bulk-errors-2', function(req, res) {
  res.redirect('bulk-uploading-3');
})

// bulk declaration
router.post('/bulk-success', function(req, res) {
  res.redirect('bulk-confirmation');
})

// bulk Confirmation
router.post('/bulk-confirmation', function(req, res) {
  res.redirect('home-move-waste-uk');
})

// bulk error 1 - row 3
router.post('/bulk-errors-1b-row3', function(req, res) {
  res.redirect('bulk-errors-1');
})

// bulk error 1 - row 12
router.post('/bulk-errors-1b-row12', function(req, res) {
  res.redirect('bulk-errors-1');
})

// bulk error 1 - row 24
router.post('/bulk-errors-1b-row24', function(req, res) {
  res.redirect('bulk-errors-1');
})

// bulk error 2 - row 3
router.post('/bulk-errors-2b-row3', function(req, res) {
  res.redirect('bulk-errors-2');
})

// bulk error 2 - row 24
router.post('/bulk-errors-2b-row24', function(req, res) {
  res.redirect('bulk-errors-2');
})



module.exports = router;