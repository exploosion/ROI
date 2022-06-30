//Tooltips
$('document').ready(function(){ 
    $('input, select, tr, td').tooltip({ 
        content: function(){ 
            return this.getAttribute('title'); 
        }, 
    });  
    
    $('tr').find('div[id=releaseType]').attr('title', '[Your insurance company] requires that KBBH get a release of information for all records before they will pay your claims. This includes records related to both mental health and substance use disorder services. Without this information, [your insurance company] will not pay for the services you receive here.'); 
    $('tr').find('div[id=releaseType]').tooltip();  
});

//Initialize display states and add event handlers for dropMatchId and dropdownShowHide
$(document).ready(function(){
	$('tr').has('div[class*=passenger]').find('select').attr('style', '-webkit-appearance: none; text-indent: 1px; pointer-events: none;');
	$('tr').has('div[class*=payerDriverText]').find('input').attr('style', '-webkit-appearance: none; text-indent: 1px; pointer-events: none;');$('tr').has('div[class*=providerDriverText]').find('input').attr('style', '-webkit-appearance: none; text-indent: 1px; pointer-events: none;');
	$('tr').has('div[class*=payerPassengerText]').find('input').attr('style', '-webkit-appearance: none; text-indent: 1px; pointer-events: none;');$('tr').has('div[class*=providerPassengerText]').find('input').attr('style', '-webkit-appearance: none; text-indent: 1px; pointer-events: none;');
		
	$('td').has('div[class*=passenger]').css('display', 'none');
	$('tr').has('div[class*=passenger]').next().find('td').css('display', 'none');
	
	$('td').has('div[class*=hideMe]').css('display', 'none');
	$('tr').has('div[class*=hideMe]').next().find('td').css('display', 'none');
	$('td').has('div[class*=payerDriver]').css('display', 'none');
	$('tr').has('div[class*=payerDriver]').next().find('td').css('display', 'none');
	$('td').has('div[class*=providerDriver]').css('display', 'none');
	$('tr').has('div[class*=providerDriver]').next().find('td').css('display', 'none');
	$('tr').has('div[class*=driver]').find('select').change(dropMatchId);
	$('tr').has('div[class*=driver]').find('select').change(dropdownShowHide);
	$('tr').has('div[class*=hideDriver]').find('select').change(dropdownShowHide);
	
	dropMatchId();
	dropdownShowHide();
	
	$('hr[class=line]').css('width', '100em');
	
	$('input[name=Complete]').prop('disabled', false);
	$('input[name=Complete]').click(dropMatchId);
});

//Functions for Matching dropdown IDs and Running Show Hide

function dropMatchId ()
{	
	if($('tr').has('div[class*=payerDriver]').find('select').val())
	{
		$('tr').has('div[class*=payerPassenger]').find('select').val($('tr').has('div[class*=payerDriver]').find('select').val());
		
		$('tr').has('div[class*=payerDriverText]').find('input').val($('tr').has('div[class*=payerDriver]').find('option[value=' + $('tr').has('div[class*=payerDriver]').find('select').val() + ']').text());
		for(let count = 0; count < $('tr').has('div[class*=payerPassenger]').find('select').length; count++)
		{
			$('tr').has('div[class*=payerPassengerText]').find('input')[count].value = $('tr').has('div[class*=payerPassenger]').find('option[value=' + $('tr').has('div[class*=payerPassenger]').find('select')[count].value + ']')[count].text;
		}
		
		requireHidden(false, 'payerDriver');
	}
	
	if($('tr').has('div[class*=providerDriver]').find('select').val())
	{
		$('tr').has('div[class*=providerPassenger]').find('select').val($('tr').has('div[class*=providerDriver]').find('select').val());
		
		$('tr').has('div[class*=providerDriverText]').find('input').val($('tr').has('div[class*=providerDriver]').find('option[value=' + $('tr').has('div[class*=providerDriver]').find('select').val() + ']').text());
		for(let count = 0; count < $('tr').has('div[class*=providerPassenger]').find('select').length; count++)
		{
			$('tr').has('div[class*=providerPassengerText]').find('input')[count].value = $('tr').has('div[class*=providerPassenger]').find('option[value=' + $('tr').has('div[class*=providerPassenger]').find('select')[count].value + ']')[count].text;
		}
		
		requireHidden(false, 'providerDriver');
	}

	clearDropdowns();
}

function dropdownShowHide ()
{
	$('td').has('div[class*=hideMe]').css('display', 'none');
	$('tr').has('div[class*=hideMe]').next().find('td').css('display', 'none');
	$('td').has('div[class*=payerDriver]').css('display', 'none');
	$('tr').has('div[class*=payerDriver]').next().find('td').css('display', 'none');
	$('td').has('div[class*=payerPassenger]').css('display', 'none');
	$('tr').has('div[class*=payerPassenger]').next().find('td').css('display', 'none');
	$('td').has('div[class*=providerDriver]').css('display', 'none');
	$('tr').has('div[class*=providerDriver]').next().find('td').css('display', 'none');
	$('td').has('div[class*=providerPassenger]').css('display', 'none');
	$('tr').has('div[class*=providerPassenger]').next().find('td').css('display', 'none');
	$('td').has('div[class*=payerPassengerText]').css('display', 'none');
	$('tr').has('div[class*=payerPassengerText]').next().find('td').css('display', 'none');
	$('td').has('div[class*=providerPassengerText]').css('display', 'none');
	$('tr').has('div[class*=providerPassengerText]').next().find('td').css('display', 'none');
		
	if($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Other\')').attr('value'))
	{
		$('td').has('div[class*=hideMe]').css('display', 'inline-block');
		$('tr').has('div[class*=hideMe]').next().find('td').css('display', 'inline');
	}
	else if ($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Payer\')').attr('value'))
	{
		$('td').has('div[class*=payerDriver]').css('display', 'inline-block');
		$('tr').has('div[class*=payerDriver]').next().find('td').css('display', 'inline');
		$('td').has('div[class*=payerPassenger]').css('display', 'inline-block');
		$('tr').has('div[class*=payerPassenger]').next().find('td').css('display', 'inline');	
	}
	else if ($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Provider\')').attr('value'))
	{
		$('td').has('div[class*=providerDriver]').css('display', 'inline-block');
		$('tr').has('div[class*=providerDriver]').next().find('td').css('display', 'inline');
		$('td').has('div[class*=providerPassenger]').css('display', 'inline-block');
		$('tr').has('div[class*=providerPassenger]').next().find('td').css('display', 'inline');
	}
	
	if($('tr').has('div[class*=payerDriverText]').find('input').val())
	{
		$('td').has('div[class*=payerPassengerText]').css('display', 'inline-block');
		$('tr').has('div[class*=payerPassengerText]').next().find('td').css('display', 'inline');
	}
	else if($('tr').has('div[class*=providerDriverText]').find('input').val())
	{
		$('td').has('div[class*=providerPassengerText]').css('display', 'inline-block');
		$('tr').has('div[class*=providerPassengerText]').next().find('td').css('display', 'inline');
	}
	
	if($('tr').has('div[class*=payerEmail]').find('input').val())
	{
		$('td').has('div[class*=payerEmail]').css('display', 'inline-block');
		$('tr').has('div[class*=payerEmail]').next().find('td').css('display', 'inline');
	}
	else if($('tr').has('div[class*=providerSpecificIndividual]').find('input').val())
	{
		$('td').has('div[class*=providerSpecificIndividual]').css('display', 'inline-block');
		$('tr').has('div[class*=providerSpecificIndividual]').next().find('td').css('display', 'inline');
	}
	$('td').has('div[class*=goAway]').css('display', 'none');
	$('tr').has('div[class*=goAway]').next().find('td').css('display', 'none');
}

//Clearing dropdowns on form submit
function clearDropdowns ()
{	
	if($('tr').has('div[class*=payerDriverText]').find('input').val())
	{
		$('tr').has('div[class*=payerDriver]').find('select').val('');
		$('tr').has('div[class*=payerPassenger]').find('select').val('');
	}
	
	if($('tr').has('div[class*=providerDriverText]').find('input').val())
	{
		$('tr').has('div[class*=providerDriver]').find('select').val('');
		$('tr').has('div[class*=providerPassenger]').find('select').val('');
	}	
	
	if($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Other\')').attr('value'))
	{
		$('tr').has('div[class*=payerDriver]').find('select').val('');
		$('tr').has('div[class*=payerPassenger]').find('select').val('');
		$('tr').has('div[class*=providerDriver]').find('select').val('');
		$('tr').has('div[class*=providerPassenger]').find('select').val('');
	}
	else if ($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Payer\')').attr('value'))
	{
		$('tr').has('div[class*=providerDriver]').find('select').val('');
		$('tr').has('div[class*=providerPassenger]').find('select').val('');
	}
	else if ($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Provider\')').attr('value'))
	{
		$('tr').has('div[class*=payerDriver]').find('select').val('');
		$('tr').has('div[class*=payerPassenger]').find('select').val('');
	}
}

//Functions to drive mandatory hidden questions
function requireHidden (condition, target)
{
	$('tr').find('div[class*=' + target + ']').next().remove();
	
	if(condition)
	{
		$('tr').has('div[class*=' + target + ']').find('input').prop('required', true);
		$('tr').has('div[class*=' + target + ']').find('select').prop('required', true);
		$('tr').find('div[class*=' + target + ']').after('<div class=\'redAsterisk\' style=\'color : red; display : inline\'>*</div>');
	}
	else
	{
		$('tr').has('div[class*=' + target + ']').find('input').prop('required', false);
		$('tr').has('div[class*=' + target + ']').find('select').prop('required', false);
	}
}

function requireHiddenNotes (condition, target)
{
		if(condition)
		{
			$('tr').has('div[class*=' + target + ']').next().find('textarea').prop('required', true);
		}
		else
		{
			$('tr').has('div[class*=' + target + ']').next().find('textarea').prop('required', false);
		}
		
		if(condition)
		{
			$('tr').has('div[id=' + target + ']').next().find('textarea').prop('required', true);
		}
		else
		{
			$('tr').has('div[id=' + target + ']').next().find('textarea').prop('required', false);
		}
}

//Event handlers for mandatory hidden questions
$(document).ready(function(){
	$('tr').has('div[class*=requiredDriver]').find('select').change(function(event)
	{
		requireHidden(false, 'requiredPassenger');
		requireHidden(false, 'payerDriver');
		requireHidden(false, 'providerDriver');
		
		if ($('tr').has('div[class*=requiredDriver]').find('select').attr('value') == $('tr').has('div[class*=requiredDriver]').find('option:contains(\'Other\')').attr('value'))
		{
			requireHidden(true, 'requiredPassenger');
			requireHidden(false, 'payerDriver');
			requireHidden(false, 'providerDriver');
		}
		else if ($('tr').has('div[class*=requiredDriver]').find('select').attr('value') == $('tr').has('div[class*=requiredDriver]').find('option:contains(\'Payer\')').attr('value'))
		{
			requireHidden(false, 'requiredPassenger');
			requireHidden(true, 'payerDriver');
			requireHidden(false, 'providerDriver');
		}
		else if ($('tr').has('div[class*=requiredDriver]').find('select').attr('value') == $('tr').has('div[class*=requiredDriver]').find('option:contains(\'Provider\')').attr('value'))
		{
			requireHidden(false, 'requiredPassenger');
			requireHidden(false, 'payerDriver');
			requireHidden(true, 'providerDriver');
		}
	});
	$('tr').has('div[class*=guardianRequiredDriver]').find('input').change(function(event)
	{
		requireHidden( $('tr').has('div[class*=guardianRequiredDriver]').find('input')[0].checked
, 			'guardianRequired');
	});
	$('tr').has('div[id=hivAids]').find('input').change(function(event)
	{
		requireHidden( ($('tr').has('div[id=hivAids]').find('input').prop('checked') == true), 'requiredDates');
	});
	$('tr').has('div[class*=verifiedRequiredDriver]').find('select').change(function(event)
	{
		requireHidden( $('tr').has('div[class*=verifiedRequiredDriver]').find('select').attr('value') != $('tr').has('div[class*=verifiedRequiredDriver]').find('option:contains(\'Parent\')').attr('value')
, 			'verifiedRequired');
	});
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').change(function(event)
	{
		requireHidden(false, 'readingRestrictionRequired');
		requireHidden(false, 'writingRestrictionRequired');
		requireHidden(false, 'languageRestrictionRequired');
			
		if ($('tr').has('div[class*=restrictionRequiredDriver]').find('input')[1].checked)
		{
			requireHidden(true, 'readingRestrictionRequired');
		}
		if ($('tr').has('div[class*=restrictionRequiredDriver]').find('input')[2].checked)
		{
			requireHidden(true, 'writingRestrictionRequired');
		}
		if ($('tr').has('div[class*=restrictionRequiredDriver]').find('input')[3].checked)
		{
			requireHidden(true, 'languageRestrictionRequired');
		}
	});
	$('tr').has('div[class*=revocationRequiredDriver]').find('input').change(function()
	{
		requireHidden($('tr').has('div[class*=revocationRequiredDriver]').find('input').prop('checked'), 'voidType');
	});
	$('tr').has('div[class*=voidType]').find('select').change(function(event)
	{
		requireHidden( ($('tr').has('div[class*=voidType]').find('select').val() == $('tr').has('div[class*=voidType]').find('option:contains(\'Revoked\')').val()), 'revocationDetails');
	});
});

//Event handlers for mandatory hidden note fields
$(document).ready(function(){
	$('tr').has('div[id=informationRecordsOther]').find('input').change(function(event)
	{
		requireHiddenNotes($('tr').has('div[id=informationRecordsOther]').find('input').prop('checked'), 'informationRecordsOther');
	});
	$('tr').has('div[class*=phiRequiredNotes]').find('input').change(function(event)
	{
		requireHiddenNotes($('tr').has('div[class*=phiRequiredNotes]').find('tr:contains(\'Other\')').eq(1).find('input').prop('checked'), 'phiRequiredNotes');
	});
	$('tr').has('div[class*=relationshipRequiredNotes]').find('select').change(function(event)
	{
		requireHiddenNotes($('tr').has('div[class*=relationshipRequiredNotes]').find('select').attr('value') == $('tr').has('div[class*=relationshipRequiredNotes]').find('option:contains(\'Other\')').attr('value'), 'relationshipRequiredNotes');
	});
	$('tr').has('div[class*=revocationNotes]').find('input').change(function(event)
	{
		requireHiddenNotes($('tr').has('div[class*=revocationNotes]').find('input').prop('checked'), 'revocationNotes');
	});
	$('tr').has('div[id=language]').find('select').change(function(event)
	{
		console.log('Entered Language Dropdown');
		if($('tr').has('div[id=language]').find('option:contains(\'Other\')').prop('selected') == true)
		{
			requireHiddenNotes(true, 'language');
		}
		else
		{
			requireHiddenNotes(false, 'language');
		}
	});
});
//Drives hidden ROI REVOKED title and Revocation section also contains code to drive
$(document).ready(function(){
	$('tr').has('div[class*=nlcbBr]').find('input[type=checkbox]').before('<br>');
	$('tr').find('div[class*=nlcbBr]').css('display', 'inline');
});

function checkHidden () 
{     
	if (($('tr').has('div[class*=voidType]').find('option[value=\'' + $('tr').has('div[class*=voidType]').find('select').val() + '\']').text()) == 'Expired')    
	{         
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', true);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', false);
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', false);
		requireHiddenNotes(false, 'voidType');
		$('td').has('div[class*=revocationDetails]').css('display', 'none');
		$('tr').has('div[class*=revocationDetails]').next().find('td').css('display', 'none');		
	}
	else if (($('tr').has('div[class*=voidType]').find('option[value=\'' + $('tr').has('div[class*=voidType]').find('select').val() + '\']').text()) == 'Invalid')     
	{                  
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', false);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', true);	
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', false);
		requireHiddenNotes(true, 'voidType');
		$('td').has('div[class*=revocationDetails]').css('display', 'none');
		$('tr').has('div[class*=revocationDetails]').next().find('td').css('display', 'none');	
	}
	else if (($('tr').has('div[class*=voidType]').find('option[value=\'' + $('tr').has('div[class*=voidType]').find('select').val() + '\']').text()) == 'Revoked')     
	{                  
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', false);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', false);
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', true);		
		requireHiddenNotes(false, 'voidType');
		$('td').has('div[class*=revocationDetails]').css('display', 'inline');
		$('tr').has('div[class*=revocationDetails]').next().find('td').css('display', 'inline-block');
	}	
	else
	{
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', false);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', false);
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', false);   
		requireHiddenNotes(false, 'voidType');
		$('td').has('div[class*=revocationDetails]').css('display', 'none');
		$('tr').has('div[class*=revocationDetails]').next().find('td').css('display', 'none');
	}
}

$(document).ready(function() 
{         
	checkHidden();
	$('tr').has('div[class=expiredROI]').find('input').css('display', 'inline');
	$('tr').has('div[class=invalidROI]').find('input').css('display', 'inline');
	$('tr').has('div[class=revokedROI]').find('input').css('display', 'inline');
	$('tr').has('div[class*=voidType]').find('select').change(checkHidden);
});

//Tasks to perform during form submit
var checked = false;
$(document).ready(function() 
{     
	$('input[type=submit]').click(function(e)
	{
		if($('tr').has('div[class*=voidType]').find('select').val() != $('tr').has('div[class*=voidType]').find('option:contains(\'Revoked\')').val())
		{
			$('tr').has('div:contains(\'Date of Revocation\')').find('input').val('');
		}
		
		if($('tr').has('div[id=hivAids]').find('input').prop('checked') == false)
		{
			$('tr').has('div[class=requiredDates]').find('input').val('');
		}
		
		$('tr').has('div[class*=informationRecords]').find('input').each(function(){
			checked = false;
			if($(this).prop('checked'))
			{
				checked = true;
				return false;
			}
		});
		
		if(checked == false)
		{
			e.preventDefault();
			alert('Please select at least one item in Information/Record(s).');
		}
	});
});

//Edit Embedded Signature Titles
$(window).bind('load', function (){
	$('#add_signature_1').find('h3').text('Client Signature');
	$('#add_signature_2').find('h3').text('Legal Guardian Signature');
	$('#add_signature_3').find('h3').text('Revocation Signature');
});    

//Clear text boxes based on dropdown
var clearCounter;

function clearPayerPassengerText ()
{
	$('td').has('div[class*=payerBegone]').css('display', 'none');
	$('tr').has('div[class*=payerBegone]').next().find('td').css('display', 'none');
	$('td').has('div[class*=payerPassengerText]').css('display', 'none');
	$('tr').has('div[class*=payerPassengerText]').next().find('td').css('display', 'none');
	$('tr').has('div[class*=payerDriverText]').find('input').val('');
	for(clearCounter = 0; clearCounter < $('tr').has('div[class*=payerPassengerText]').find('input').length; clearCounter++)
	{
		$('tr').has('div[class*=payerPassengerText]').find('input')[clearCounter].value = '';
	}
	$('tr').has('div[class*=payerEmail]').find('input').val('');
}

function clearProviderPassengerText ()
{
	$('td').has('div[class*=providerBegone]').css('display', 'none');
	$('tr').has('div[class*=providerBegone]').next().find('td').css('display', 'none');
	$('td').has('div[class*=providerPassengerText]').css('display', 'none');
	$('tr').has('div[class*=providerPassengerText]').next().find('td').css('display', 'none');
	$('tr').has('div[class*=providerDriverText]').find('input').val('');
	$('tr').has('div[class*=providerSpecificIndividual]').find('input').val('');
	for(clearCounter = 0; clearCounter < $('tr').has('div[class*=providerPassengerText]').find('input').length; clearCounter++)
	{
		$('tr').has('div[class*=providerPassengerText]').find('input')[clearCounter].value = '';
	}
}

function clearOtherText ()
{
	for(clearCounter = 0; clearCounter < $('tr').has('div[class*=hideMe]').find('input').length; clearCounter++)
	{
		$('tr').has('div[class*=hideMe]').find('input')[clearCounter].value = '';
	}
	for(clearCounter = 0; clearCounter < $('tr').has('div[class*=hideMe]').find('select').length; clearCounter++)
	{
		$('tr').has('div[class*=hideMe]').find('select')[clearCounter].value = '';
	}
}

function clearText ()
{
	if ($('tr').has('div[class*=requiredDriver]').find('select').val() == $('tr').has('div[class*=requiredDriver]').find('option:contains(\'Payer\')').val())
	{
		clearProviderPassengerText();
		clearOtherText();
	}
	else if ($('tr').has('div[class*=requiredDriver]').find('select').val() == $('tr').has('div[class*=requiredDriver]').find('option:contains(\'Provider\')').val())
	{
		clearPayerPassengerText();
		clearOtherText();
	}
	else if ($('tr').has('div[class*=requiredDriver]').find('select').val() == $('tr').has('div[class*=requiredDriver]').find('option:contains(\'Other\')').val())
	{
		clearPayerPassengerText();
		clearProviderPassengerText();
	}
	else
	{
		clearPayerPassengerText();
		clearProviderPassengerText();
		clearOtherText();
	}
}

$(document).ready(function() 
{
	$('tr').has('div[class*=requiredDriver]').find('select').change(clearText);
});

//Restrictions checkbox logic
$(document).ready(function() 
{
	$('td').has('div[class*=readingRestriction]').hide();
	$('td').has('div[class*=writingRestriction]').hide();
	$('td').has('div[class*=languageRestriction]').hide();
	
	if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).prop('checked'))
	{
		$('td').has('div[class*=readingRestriction]').show();
	}
	
	if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).prop('checked'))
	{
		$('td').has('div[class*=writingRestriction]').show();
	}
	
	if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).prop('checked'))
	{
		$('td').has('div[class*=languageRestriction]').show();
	}
			
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).prop('checked', false);
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).prop('checked', false);
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).prop('checked', false);
			$('td').has('div[class*=readingRestriction]').hide();
			$('td').has('div[class*=writingRestriction]').hide();
			$('td').has('div[class*=languageRestriction]').hide();
		}
	});
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked', false);
			$('td').has('div[class*=readingRestriction]').show();
		}
		else
		{
			$('td').has('div[class*=readingRestriction]').hide();
		}
	});
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked', false);
			$('td').has('div[class*=writingRestriction]').show();
		}
		else
		{
			$('td').has('div[class*=writingRestriction]').hide();
		}
	});
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked', false);
			$('td').has('div[class*=languageRestriction]').show();
		}
		else
		{
			$('td').has('div[class*=languageRestriction]').hide();
		}
	});
});

//Default dates section
var date;

$(document).ready(function() 
{
	$('tr').has('div[class*=voidType]').find('select').change(function(){
		if($('tr').has('div[class*=voidType]').find('option').eq(2).prop('selected'))
		{
			if($('tr').has('div[id=revocationDate]').find('input').val() == '')
			{
				date = new Date();
				$('tr').has('div[id=revocationDate]').find('input').val((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
			}
		}
		else
		{
			$('tr').has('div[id=revocationDate]').find('input').val('');
		}
	});
});

//Require signatures
var initialized = false;

function signatureDisclaimers()
{
	if (initialized == false)
	{
		$('img[id=add_signature_1_img]').click(function()
		{
			alert('Make sure to enter the client\'s full name in the text box. If capturing verbal consent, also include verbal consent in the text box.');
		});
			
		$('img[id=add_signature_2_img]').click(function()
		{
			alert('Make sure to enter the legal guardian\'s full name in the text box. If capturing verbal consent, also include verbal consent in the text box.');
		});
			
		$('img[id=add_signature_3_img]').click(function()
		{
			alert('Include \"Revocation\" and the signer\'s full name in the text box.');
		});
		
		initialized = true;
		
		console.log('Added signature disclaimers.');
	}
}

function waitForElement (selector, callback, maxTimes = false)
{
	if (maxTimes != false)
	{
		maxTimes--;
	}
	console.log('Attempt');
	if($(selector).length)
	{
		callback();
		console.log('Finished');
	}
	else
	{
		if (maxTimes === false || maxTimes > 0)
		{
			setTimeout(function()
			{
				console.log('Waiting');
				waitForElement(selector, callback, maxTimes);
			}, 100);
		}
		else
		{
			console.log('Max attempts reached, giving up.');
		}
	}
}

function customCallBack ()
{
	console.log('It\'s here!');
	signatureDisclaimers();
}
	
$(document).ready(function() 
{
	$('input[type=submit]').click(function(e)
	{
		if(( $('#add_signature_1_img').attr('title') == undefined || $('#add_signature_1_img').attr('title') == 'signature placeholder' ) && ( $('#add_signature_2_img').attr('title') == undefined || $('#add_signature_2_img').attr('title') == 'signature placeholder' ) ) 
		{ 
			if($('tr').has('div[class=guardianRequiredDriver]').find('input').eq(0).prop('checked') == true) 
			{  
			} 
			else 
			{ 
				e.preventDefault(); 
				alert('Please capture client signature.'); 
			} 
		}  
		
		if($('tr').has('div[class=guardianRequiredDriver]').find('input').eq(0).prop('checked') == true) 
		{ 
			if($('#add_signature_2_img').attr('title') == undefined || $('#add_signature_2_img').attr('title') == 'signature placeholder') 
			{ 
				e.preventDefault(); 
				alert('Please capture legal guardian signature.'); 
			} 
		}
		
		if (($('tr').has('div[class*=voidType]').find('option[value=\'' + $('tr').has('div[class*=voidType]').find('select').val() + '\']').text()) == 'Revoked')  
		{
			if($('#add_signature_3_img').attr('title') == undefined || $('#add_signature_3_img').attr('title') == 'signature placeholder')
			{
				e.preventDefault();
				alert('Please capture revocation signature.');
			}
		}
	});
		
	waitForElement('img[id=add_signature_1_img]', customCallBack, 10);
});

//Auto check purposes if recipient/sender is a payer
function checkPayer(){
	if($('tr').has('div[id=recipientSenderType]').find('select').val() == $('tr').has('div[id=recipientSenderType]').find('option[text=Payer]').val()){
		$('tr').has('div[id=purpose]').find('tr:contains(\'Payment\')').eq(1).find('input').prop('checked', true);
		$('tr').has('div[id=purpose]').find('tr:contains(\'Treatment\')').eq(1).find('input').prop('checked', true);
		$('tr').has('div[id=purpose]').find('tr:contains(\'Healthcare Operations\')').eq(1).find('input').prop('checked', true);
	}
}

$('document').ready(function(){
	$('tr').has('div[id=recipientSenderType]').find('option').each(function(){this.setAttribute('text', this.outerText);});
	
	$('tr').has('div[id=recipientSenderType]').find('select').change(checkPayer);
});

//Auto populate message for Outreach
var programID;

function checkOutreach(){
	if(programID == 138 && $('tr').has('div[class*=providerDriverText]').find('input').val() == 'PSU-Regional Research Institute for Human Services')
	{
		$('tr').has('div[id=informationRecordsOutreach]').find('input').prop('checked', false);
		$('tr').has('div[id=informationRecordsOutreach]').find('input').trigger('click');
		$('tr').has('div[class=phiRequiredNotes]').find('tr:contains(\'Program Evaluation & Research\')').eq(1).find('input').prop('checked', true);
		$('td').has('div[id=informationRecordsOutreach]').show();
		$('tr').has('div[id=informationRecordsOutreach]').next().show();
		$('tr:contains(\'Program Evaluation & Research (not for treatment purposes)\')').eq(2).show();
		console.log('Is Outreach');
	}
	else
	{
		$('tr').has('div[id=informationRecordsOutreach]').find('input').prop('checked', true);
		$('tr').has('div[id=informationRecordsOutreach]').find('input').trigger('click');
		$('tr').has('div[id=informationRecordsOutreach]').next().find('textarea').val('');
		$('tr').has('div[class=phiRequiredNotes]').find('tr:contains(\'Program Evaluation & Research\')').eq(1).find('input').prop('checked', false);
		$('td').has('div[id=informationRecordsOutreach]').hide();
		$('tr').has('div[id=informationRecordsOutreach]').next().hide();
		$('tr:contains(\'Program Evaluation & Research (not for treatment purposes)\')').eq(2).hide();
		console.log('Not Outreach');
	}
}

$('document').ready(function(){
	try{
		programID = window.parent[0].$('input[id=programId]').val();
	}
	catch{
		if(programID == undefined){
			programID = 130;
		}
	}

	checkOutreach();
	$('tr').has('div[class*=providerDriver]').find('select').change(checkOutreach);
});

//SUD All Options
function checkSUD(){
	if($('tr').has('div[id=sudAll]').find('input').prop('checked')){
		$('tr').has('div[id=sudOption]').find('input').eq(0).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(1).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(2).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(3).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(4).prop('checked', false);
		$('td').has('div[id=sudOption]').hide();
		$('tr').has('div[id=sudOption]').next().find('td').hide();
	}
	else{
		$('td').has('div[id=sudOption]').show();
		$('tr').has('div[id=sudOption]').next().find('td').show();
	}
	
	if($('tr').has('div[id=sudOption]').find('input').eq(0).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(1).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(2).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(3).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(4).prop('checked')){
		$('tr').has('div[id=sudAll]').find('input').prop('checked', false);
		$('td').has('div[id=sudAll]').hide();
		$('tr').has('div[id=sudAll]').next().find('td').hide();
	}
	else{
		$('td').has('div[id=sudAll]').show();
		$('tr').has('div[id=sudAll]').next().find('td').show();
	}
}

$('document').ready(function(){
	checkSUD();
	
	$('tr').has('div[id=sudAll]').find('input').change(checkSUD);
	$('tr').has('div[id=sudOption]').find('input').change(checkSUD);
});

//Check all releases on page load
var formState;

function checkFormState(){
	formState = 'new';
	for(let count = 0; count < arguments.length; count++){
		while($('tr').has(`div[class=${arguments[count]}], div[id=${arguments[count]}]`).length == 0){

		}
	}
	for(let count = 0; count < arguments.length; count++){
		if($('tr').has(`div[class=${arguments[count]}], div[id=${arguments[count]}]`).find('input:checked').length || $('tr').has(`div[class=${arguments[count]}], div[id=${arguments[count]}]`).find('input').val() || $('tr').has(`div[class=${arguments[count]}], div[id=${arguments[count]}]`).find('select').val()){
			formState = 'reloaded';
		}
	}
	console.log(formState);
	checkMedicaid();
}

function checkMedicaid(){
	if(formState == 'new'){
		$('tr').has('div[insuranceType=medicaid]').find('input').each(function(){
			if(!$(this).prop('checked')){
				$(this).trigger('click');
			}
		});
		console.log('Checking All');
	}
	else{
		console.log('Checking None')
	}
}

window.onload = function(){
  checkFormState.apply(null, ['releaseType', 'recipientSenderType']);    
};

//Hide unwanted Options in Select
function hideOption (target, optionText, mode = 'hide'){
	if(mode == 'hide'){
		$('tr').has(`div[id=${target}], div[class*=${target}]`).find(`option:contains(${optionText})`).hide();
	}
	else{
		$('tr').has(`div[id=${target}], div[class*=${target}]`).find(`option:contains(${optionText})`).show();
	}
	
}



///Debug Test
function debugTest(){
    $('td').has('div[class*=hideMe]').css('display', 'inline-block');
    $('tr').has('div[class*=hideMe]').next().find('td').css('display', 'inline');
    $('td').has('div[class*=payerDriver]').css('display', 'inline-block');
    $('tr').has('div[class*=payerDriver]').next().find('td').css('display', 'inline');
    $('td').has('div[class*=payerPassenger]').css('display', 'inline-block');
    $('tr').has('div[class*=payerPassenger]').next().find('td').css('display', 'inline');
    $('td').has('div[class*=providerDriver]').css('display', 'inline-block');
    $('tr').has('div[class*=providerDriver]').next().find('td').css('display', 'inline');
    $('td').has('div[class*=providerPassenger]').css('display', 'inline-block');
    $('tr').has('div[class*=providerPassenger]').next().find('td').css('display', 'inline');
    $('td').has('div[class*=payerPassengerText]').css('display', 'inline-block');
    $('tr').has('div[class*=payerPassengerText]').next().find('td').css('display', 'inline');
    $('td').has('div[class*=providerPassengerText]').css('display', 'inline-block');
    $('tr').has('div[class*=providerPassengerText]').next().find('td').css('display', 'inline');

    if($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Other\')').attr('value'))
    {
        $('tr').has('div[class*=payerDriver]').find('select').val('');
        $('tr').has('div[class*=payerPassenger]').find('select').val('');
        $('tr').has('div[class*=providerDriver]').find('select').val('');
        $('tr').has('div[class*=providerPassenger]').find('select').val('');
    }
    else if ($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Payer\')').attr('value'))
    {
        $('tr').has('div[class*=providerDriver]').find('select').val('');
        $('tr').has('div[class*=providerPassenger]').find('select').val('');
    }
    else if ($('tr').has('div[class*=hideDriver]').find('select').attr('value') == $('option:contains(\'Provider\')').attr('value'))
    {
        $('tr').has('div[class*=payerDriver]').find('select').val('');
        $('tr').has('div[class*=payerPassenger]').find('select').val('');
    }
}

//Make uneditable, remove dropdown arrow
function makeDropDownReadOnly(){
    $('tr').has('div[class*=passenger]').find('select').attr('style', '-webkit-appearance: none; text-indent: 1px; pointer-events: none;');
}