
//Initialize display states and add event handlers for dropMatchId and dropdownShowHide

document.addEventListener('DOMContentLoaded', (event) => { 
	try{
		[...document.querySelectorAll('.sender')].forEach((sender) => {
			sender.closest('table').querySelector('select').setAttribute(
				'style',
				'-webkit-appearance: none; text-indent: 1px; pointer-events: none;'
			);
		});
	}catch(error){

	}

	document.querySelector('#recipientSenderType').closest('table').querySelector('select').addEventListener('change', () => {
		//If Swapping from one to another, clear fields of appropriate Then autofill when interpreter
	});
	document.querySelector('#recipientSenderType').closest('table').querySelector('select').addEventListener('mouseleave', () => {
		//If Swapping from one to another, clear fields of appropriate Then autofill when interpreter
	});

	document.querySelector('#payerSelect').closest('table').querySelector('select').addEventListener('change', () => {
		try{
			dropMatchId();
		}catch(error){
			console.log(error);
		}
	});
	document.querySelector('#payerSelect').closest('table').querySelector('select').addEventListener('mouseleave', () => {
		try{
			dropMatchId();
		}catch(error){
			console.log(error);
		}
	});

	
	document.querySelector('#providerSelect').closest('table').querySelector('select').addEventListener('change', () => {
		try{
			dropMatchId();
		}catch(error){
			console.log(error);
		}
	});
	document.querySelector('#providerSelect').closest('table').querySelector('select').addEventListener('mouseleave', () => {
		try{
			dropMatchId();
		}catch(error){
			console.log(error);
		}
	});
	
	try{
		dropMatchId();
	}catch(error){
		console.log(error);
	}
	
	document.querySelectorAll('hr.line').forEach(hr => {
		hr.style.width = '100em';
	});
	
	document.querySelectorAll('input[name="Complete"]').forEach(input => {
		input.disabled = false;
	});
});

//Functions for Matching dropdown IDs and Running Show Hide
function dropMatchId ()
{	
	//Clear all reciever entries
	[...document.querySelectorAll('.reciever')].forEach((reciever) => {
		reciever.closest('table').querySelector('input, select').value = '';

		try{
			reciever.closest('table').querySelector('input').readOnly = false;
		}catch(error){

		}
		try{
			reciever.closest('table').querySelector('select').disabled = false;
		}catch(error){

		}
	});

	if(document.querySelector('#payerSelect').closest('table').querySelector('select').value){
		[...document.querySelectorAll('.payerPassenger')].forEach((passenger) => {
			passenger.closest('table').querySelector('select').value = document.querySelector('#payerSelect').closest('table').querySelector('select').value;
		});

		if(document.querySelector('#payerSelect').closest('table').querySelector('select').options[document.querySelector('#payerSelect').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#entity').closest('table').querySelector('input').value = document.querySelector('#payerSelect').closest('table').querySelector('select').options[document.querySelector('#payerSelect').closest('table').querySelector('select').selectedIndex].text.replace(/\./g, '');

			document.querySelector('#entity').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#payerAddressOne').closest('table').querySelector('select').options[document.querySelector('#payerAddressOne').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#addressOne').closest('table').querySelector('input').value = document.querySelector('#payerAddressOne').closest('table').querySelector('select').options[document.querySelector('#payerAddressOne').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#addressOne').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#payerAddressTwo').closest('table').querySelector('select').options[document.querySelector('#payerAddressTwo').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#addressTwo').closest('table').querySelector('input').value = document.querySelector('#payerAddressTwo').closest('table').querySelector('select').options[document.querySelector('#payerAddressTwo').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#addressTwo').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#payerCity').closest('table').querySelector('select').options[document.querySelector('#payerCity').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#city').closest('table').querySelector('input').value = document.querySelector('#payerCity').closest('table').querySelector('select').options[document.querySelector('#payerCity').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#city').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#payerState').closest('table').querySelector('select').options[document.querySelector('#payerState').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#state').closest('table').querySelector('select').value = [...document.querySelector('#state').closest('table').querySelector('select').options].find(option =>	option.title.trim().toLowerCase() == document.querySelector('#payerState').closest('table').querySelector('select').options[document.querySelector('#payerState').closest('table').querySelector('select').selectedIndex].text.trim().toLowerCase()).value;

			document.querySelector('#state').closest('table').querySelector('select').disabled = true;
		}
		if(document.querySelector('#payerZip').closest('table').querySelector('select').options[document.querySelector('#payerZip').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#zip').closest('table').querySelector('input').value = document.querySelector('#payerZip').closest('table').querySelector('select').options[document.querySelector('#payerZip').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#zip').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#payerPhone').closest('table').querySelector('select').options[document.querySelector('#payerPhone').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#phone').closest('table').querySelector('input').value = document.querySelector('#payerPhone').closest('table').querySelector('select').options[document.querySelector('#payerPhone').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#phone').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#payerFax').closest('table').querySelector('select').options[document.querySelector('#payerFax').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#fax').closest('table').querySelector('input').value = document.querySelector('#payerFax').closest('table').querySelector('select').options[document.querySelector('#payerFax').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#fax').closest('table').querySelector('input').readOnly = true;
		}

		requireField('#payerSelect', false);
	}

	if(document.querySelector('#providerSelect').closest('table').querySelector('select').value){
		[...document.querySelectorAll('.providerPassenger')].forEach((passenger) => {
			passenger.closest('table').querySelector('select').value = document.querySelector('#providerSelect').closest('table').querySelector('select').value;
		});

		if(document.querySelector('#providerSelect').closest('table').querySelector('select').options[document.querySelector('#providerSelect').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#entity').closest('table').querySelector('input').value = document.querySelector('#providerSelect').closest('table').querySelector('select').options[document.querySelector('#providerSelect').closest('table').querySelector('select').selectedIndex].text.replace(/\./g, '');

			document.querySelector('#entity').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#providerAddressOne').closest('table').querySelector('select').options[document.querySelector('#providerAddressOne').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#addressOne').closest('table').querySelector('input').value = document.querySelector('#providerAddressOne').closest('table').querySelector('select').options[document.querySelector('#providerAddressOne').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#addressOne').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#providerCity').closest('table').querySelector('select').options[document.querySelector('#providerCity').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#city').closest('table').querySelector('input').value = document.querySelector('#providerCity').closest('table').querySelector('select').options[document.querySelector('#providerCity').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#city').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#providerState').closest('table').querySelector('select').options[document.querySelector('#providerState').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#state').closest('table').querySelector('select').value = [...document.querySelector('#state').closest('table').querySelector('select').options].find(option =>	option.title.trim().toLowerCase() == document.querySelector('#providerState').closest('table').querySelector('select').options[document.querySelector('#providerState').closest('table').querySelector('select').selectedIndex].text.trim().toLowerCase()).value;

			document.querySelector('#state').closest('table').querySelector('select').disabled = true;
		}
		if(document.querySelector('#providerZip').closest('table').querySelector('select').options[document.querySelector('#providerZip').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#zip').closest('table').querySelector('input').value = document.querySelector('#providerZip').closest('table').querySelector('select').options[document.querySelector('#providerZip').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#zip').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#providerPhone').closest('table').querySelector('select').options[document.querySelector('#providerPhone').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#phone').closest('table').querySelector('input').value = document.querySelector('#providerPhone').closest('table').querySelector('select').options[document.querySelector('#providerPhone').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#phone').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#providerFax').closest('table').querySelector('select').options[document.querySelector('#providerFax').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#fax').closest('table').querySelector('input').value = document.querySelector('#providerFax').closest('table').querySelector('select').options[document.querySelector('#providerFax').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#fax').closest('table').querySelector('input').readOnly = true;
		}
		if(document.querySelector('#providerEmail').closest('table').querySelector('select').options[document.querySelector('#providerEmail').closest('table').querySelector('select').selectedIndex].text != ''){
			document.querySelector('#email').closest('table').querySelector('input').value = document.querySelector('#providerEmail').closest('table').querySelector('select').options[document.querySelector('#providerEmail').closest('table').querySelector('select').selectedIndex].text;

			document.querySelector('#email').closest('table').querySelector('input').readOnly = true;
		}

		requireField('#providerSelect', false);
	}

	clearDropdowns();
}

//Clearing dropdowns on form submit
function clearDropdowns()
{	
	document.querySelector('#payerSelect').closest('table').querySelector('select').value = '';
	document.querySelector('#providerSelect').closest('table').querySelector('select').value = '';
	[...document.querySelectorAll('.sender')].forEach((sender) => {
		sender.closest('table').querySelector('select').value = '';
	});
}

//Re-enable any disabled dropdowns before form submit
document.addEventListener('submit', () => {
  [...document.querySelectorAll('select:disabled')].forEach(select => {
    select.disabled = false;
  });
});

/*
//Event handlers for mandatory hidden questions
$(document).ready(function(){
	$('tr').has('div[class*=guardianRequiredDriver]').find('input').change(function(event)
	{
		requireField('#guardianRequired', $('tr').has('div[class*=guardianRequiredDriver]').find('input')[0].checked);
	});
	$('tr').has('div[id=hivAids]').find('input').change(function(event)
	{
		requireField('#requiredDates', ($('tr').has('div[id=hivAids]').find('input').prop('checked') == true));
	});
	$('tr').has('div[class*=verifiedRequiredDriver]').find('select').change(function(event)
	{
		requireField('#verifiedRequired', $('tr').has('div[class*=verifiedRequiredDriver]').find('select').attr('value') != $('tr').has('div[class*=verifiedRequiredDriver]').find('option:contains(\'Parent\')').attr('value'));
	});

	checkRestrictions();

	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').change(function(event){
		checkRestrictions();
	});
	
	$('tr').has('div[class*=revocationRequiredDriver]').find('input').change(function()
	{
		requireField('#voidType', $('tr').has('div[class*=revocationRequiredDriver]').find('input').prop('checked'));
	});
	$('tr').has('div[class*=voidType]').find('select').change(function(event)
	{
		requireField('#revocationDetails', ($('tr').has('div[class*=voidType]').find('select').val() == $('tr').has('div[class*=voidType]').find('option:contains(\'Revoked\')').val()));
	});
});

function checkRestrictions(){
	requireField('#readingRestrictionRequired', false);
	requireField('#writingRestrictionRequired', false);
	requireField('#languageRestrictionRequired', false);
		
	if ($('tr').has('div[class*=restrictionRequiredDriver]').find('input')[1].checked){
		requireField('#readingRestrictionRequired', false);
	}
	if ($('tr').has('div[class*=restrictionRequiredDriver]').find('input')[2].checked){
		requireField('#writingRestrictionRequired', false);
	}
	if ($('tr').has('div[class*=restrictionRequiredDriver]').find('input')[3].checked){
		requireField('#languageRestrictionRequired', false);
	}
}

//Event handlers for mandatory hidden note fields
$(document).ready(function(){
	$('tr').has('div[id=informationRecordsOther]').find('input').change(function(event)
	{
		requireNotes('#informationRecordsOther', $('tr').has('div[id=informationRecordsOther]').find('input').prop('checked'));
	});
	$('tr').has('div[class*=phiRequiredNotes]').find('input').change(function(event)
	{
		requireNotes('#phiRequiredNotes', $('tr').has('div[class*=phiRequiredNotes]').find('tr:contains(\'Other\')').eq(1).find('input').prop('checked'));
	});
	$('tr').has('div[class*=relationshipRequiredNotes]').find('select').change(function(event)
	{
		requireNotes('#relationshipRequiredNotes', $('tr').has('div[class*=relationshipRequiredNotes]').find('select').attr('value') == $('tr').has('div[class*=relationshipRequiredNotes]').find('option:contains(\'Other\')').attr('value'));
	});
	$('tr').has('div[class*=revocationNotes]').find('input').change(function(event)
	{
		requireNotes('#revocationNotes', $('tr').has('div[class*=revocationNotes]').find('input').prop('checked'));
	});
	$('tr').has('div[id=language]').find('select').change(function(event)
	{
		console.log('Entered Language Dropdown');
		if($('tr').has('div[id=language]').find('option:contains(\'Other\')').prop('selected') == true)
		{
			requireNotes('#language', true);
		}
		else
		{
			requireNotes('#language', false);
		}
	});
});
//Drives hidden ROI REVOKED title and Revocation section also contains code to drive
$(document).ready(function(){
	$('tr').has('div[class*=nlcbBr]').find('input[type=checkbox]').before('<br>');
	$('tr').find('div[class*=nlcbBr]').css('display', 'inline');

	checkVoid();
	setTimeout(function(){
		checkVoid();
	}, 1000);
	$('tr').has('div[class=revocationRequiredDriver]').find('input').change(checkVoid);
});

function checkVoid(){
	visibility('hide', '#reason');
	if($('tr').has('div[class=revocationRequiredDriver]').find('input').prop('checked')){
		visibility('show', '#reason');
	}
}

function checkHidden () 
{     
	if (($('tr').has('div[class*=voidType]').find('option[value=\'' + $('tr').has('div[class*=voidType]').find('select').val() + '\']').text()) == 'Expired')    
	{         
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', true);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', false);
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', false);
		requireNotes('#voidType', false);
		visibility('hide', '.revocationDetails');	
	}
	else if (($('tr').has('div[class*=voidType]').find('option[value=\'' + $('tr').has('div[class*=voidType]').find('select').val() + '\']').text()) == 'Invalid')     
	{                  
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', false);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', true);	
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', false);
		requireNotes('#voidType', true);
		visibility('hide', '.revocationDetails');	
	}
	else if (($('tr').has('div[class*=voidType]').find('option[value=\'' + $('tr').has('div[class*=voidType]').find('select').val() + '\']').text()) == 'Revoked')     
	{                  
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', false);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', false);
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', true);		
		requireNotes('#voidType', false);
		visibility('show', '.revocationDetails');
	}	
	else
	{
		$('tr').has('div[class=expiredROI]').find('input').attr('checked', false);
		$('tr').has('div[class=invalidROI]').find('input').attr('checked', false);
		$('tr').has('div[class=revokedROI]').find('input').attr('checked', false);   
		requireNotes('voidType', false);
		visibility('hide', '.revocationDetails');
	}
}

$(document).ready(function() 
{         
	checkHidden();
	setTimeout(function(){
		checkHidden();
	}, 1000);
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
	visibility('hide', '.payerBegone');
	//visibility('hide', '.payerPassengerText');
	$('tr').has('div[class*=payerDriverText]').find('input').val('');
	for(clearCounter = 0; clearCounter < $('tr').has('div[class*=payerPassengerText]').find('input').length; clearCounter++)
	{
		$('tr').has('div[class*=payerPassengerText]').find('input')[clearCounter].value = '';
	}
	$('tr').has('div[class*=payerEmail]').find('input').val('');
}

function clearProviderPassengerText ()
{
	visibility('hide', '.providerBegone');
	//visibility('hide', '.providerPassengerText');
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
	visibility('hide', '.readingRestriction');
	visibility('hide', '.readingRestrictionRequired');
	visibility('hide', '.writingRestriction');
	visibility('hide', '.writingRestrictionRequired');
	visibility('hide', '.languageRestriction');
	visibility('hide', '.languageRestrictionRequired');
	
	if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).prop('checked'))
	{
		visibility('show', '.readingRestriction');
		visibility('show', '.readingRestrictionRequired');
	}
	
	if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).prop('checked'))
	{
		visibility('show', '.writingRestriction');
		visibility('show', '.writingRestrictionRequired');
	}
	
	if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).prop('checked'))
	{
		visibility('show', '.languageRestriction');
		visibility('show', '.languageRestrictionRequired');
	}
			
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).prop('checked', false);
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).prop('checked', false);
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).prop('checked', false);
			visibility('hide', '.readingRestriction');
			visibility('hide', '.readingRestrictionRequired');
			visibility('hide', '.writingRestriction');
			visibility('hide', '.writingRestrictionRequired');
			visibility('hide', '.languageRestriction');
			visibility('hide', '.languageRestrictionRequired');
		}
	});
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(1).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked', false);
			visibility('show', '.readingRestriction');
			visibility('show', '.readingRestrictionRequired');
		}
		else
		{
			visibility('hide', '.readingRestriction');
			visibility('hide', '.readingRestrictionRequired');
		}
	});
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(2).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked', false);
			visibility('show', '.writingRestriction');
			visibility('show', '.writingRestrictionRequired');
		}
		else
		{
			visibility('hide', '.writingRestriction');
			visibility('hide', '.writingRestrictionRequired');
		}
	});
	$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).change(function(){
		if($('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(3).prop('checked'))
		{
			$('tr').has('div[class*=restrictionRequiredDriver]').find('input').eq(0).prop('checked', false);
			visibility('show', '.languageRestriction');
			visibility('show', '.languageRestrictionRequired');
		}
		else
		{
			visibility('hide', '.languageRestriction');
			visibility('hide', '.languageRestrictionRequired');
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

//SUD All Options
function checkSUD(){
	if($('tr').has('div[id=sudAll]').find('input').prop('checked')){
		$('tr').has('div[id=sudOption]').find('input').eq(0).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(1).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(2).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(3).prop('checked', false);
		$('tr').has('div[id=sudOption]').find('input').eq(4).prop('checked', false);
		visibility('hide', '.sudOptions');
	}
	else{
		visibility('show', '.sudOptions');
	}
	
	if($('tr').has('div[id=sudOption]').find('input').eq(0).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(1).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(2).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(3).prop('checked') || $('tr').has('div[id=sudOption]').find('input').eq(4).prop('checked')){
		$('tr').has('div[id=sudAll]').find('input').prop('checked', false);
		visibility('hide', '#sudAll');
	}
	else{
		visibility('show', '#sudAll');
	}
}

$('document').ready(function(){
	setTimeout(function(){
		checkSUD();
	}, 1000); 
	
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

		$('tr').has('div[id=releaseType]').find('select').val($('tr').has('div[id=releaseType]').find('option').filter(function (){return $(this).html() == 'Release/Receive Records/Information';}).val());

		$('tr').has('div[id=releaseType]').find('select').trigger('change');
		
		$('tr').has('div[id=recipientSenderType]').find('select').val($('tr').has('div[id=recipientSenderType]').find('option').filter(function (){return $(this).html() == 'Payer';}).val());

		$('tr').has('div[id=recipientSenderType]').find('select').trigger('change');
		
		$('tr').has('div[class*=payerDriver]').find('select').val($('tr').has('div[class*=payerDriver]').find('option').filter(function (){return $(this).html() == 'CHA/OMAP';}).val());

		$('tr').has('div[class*=payerDriver]').find('select').trigger('change');

		console.log('Defaulting to CHA/OMHP');
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
		$('tr').has(`div[id=${target}], div[class*=${target}]`).find(`option`).filter(function(){return $(this).text() == optionText}).hide();
	}
	else{
		$('tr').has(`div[id=${target}], div[class*=${target}]`).find(`option`).filter(function(){return $(this).text() == optionText}).show();
	}
}

$('document').ready(function(){
	hideOption('payerDriver', 'Cascade Health Alliance');
	hideOption('payerDriver', 'CHA RES');
	hideOption('payerDriver', 'CHA Special Auth. Rate ');
	hideOption('payerDriver', 'CHA SUD ');
	hideOption('payerDriver', 'CHAACT');
	hideOption('payerDriver', 'OMAP');
	hideOption('payerDriver', 'OMAP CAWEM');
	hideOption('payerDriver', 'OMAP QMB ');
	hideOption('payerDriver', 'OMAP SMB');
	hideOption('payerDriver', 'OMAP SMF');
	hideOption('payerDriver', 'OMAP Tier 1 Absent');
	hideOption('payerDriver', 'OMAP Tier 2');
	hideOption('payerDriver', 'OMAP Tier 3');
	hideOption('payerDriver', 'OMAP Tier 4');
	hideOption('payerDriver', 'OMAP Tier 5');
	hideOption('payerDriver', 'zTest');
});

//When CHA/OMAP
function setMedicaid(){
	if($('tr').has('div[id=payerName]').find('input').val() == 'CHA/OMAP'){
		$('tr').has('div[insuranceType=medicaid]').find('input').prop('checked', true);
		checkSUD();
	}
}

function whenCHAOMAP(){
	$('tr').has('div[insuranceType=medicaid]').find('input').attr('title', '');

	if($('#recipientSenderType').closest('table').parent().find('select').val() == $('#recipientSenderType').closest('table').parent().find('option').filter(function (){ return $(this).html() == 'Payer'}).val()){
		if($('tr').has('div[id=payerName]').find('input').val() == 'CHA/OMAP'){
			$('tr').has('div[insuranceType=medicaid]').find('input').attr('title', '<ul><li>As a Medicaid member, your insurance requires you release all KBBH records to all local Medicaid payers in order to receive services.  This includes, but is not limited to mental health and substance use disorder records, regardless of past or future services in these areas.</li></ul>');

			setMedicaid();

			$('tr').has('div[class*=payerPassengerText]').find('input').val('');
		}
		else if($('tr').has('div[id=payerName]').find('input').val() == 'Medicare'){
			$('tr').has('div[insuranceType=medicaid]').find('input').attr('title', '<ul><li>As a Medicare member, your insurance requires you release all KBBH records in order to receive services.  This includes, but is not limited to mental health and substance use disorder records, regardless of past or future services in these areas.</li></ul>');
		}
		else if($('tr').has('div[id=payerName]').find('input').val() != null && $('tr').has('div[id=payerName]').find('input').val() != 'CHA/OMAP' && $('tr').has('div[id=payerName]').find('input').val() != 'Medicare'){
			$('tr').has('div[insuranceType=medicaid]').find('input').attr('title', '<ul><li>Your insurance requires you release records related to both mental health and substance use disorders in order for KBBH to bill your insurance, regardless of past or future services in these areas.  Without this release, we will not be able to bill your insurance and you will be financially responsible for any charges to your account.</li></ul>');
		}
	}
}

$('document').ready(function(){
	//Prevent input if CHA/OMAP
	$('tr').has('div[insuranceType=medicaid]').find('input').click(function(e){
		if($('tr').has('div[id=payerName]').find('input').val() == 'CHA/OMAP' || $('tr').has('div[id=payerName]').find('input').val() == 'Medicare' || $('tr').has('div[id=payerName]').find('input').val() == 'Medicare (check only)'){
			e.preventDefault();
		}
	});

	//When CHA/OMAP add script to tooltips
	$('tr').has('div[insuranceType=medicaid]').find('input').tooltip();
	$('tr').has('div[id=recipientSenderType]').find('select').change(whenCHAOMAP);
	$('tr').has('div[class*=payerDriver]').find('select').change(whenCHAOMAP);

	//Add tooltip for All SUD Records
	$('#sudAll').attr('title', 'SUD All Records include:\n<ul><li>SUD Assessment</li><li>SUD Diagnosis</li><li>SUD Treatment Plan</li><li>SUD Treatment Notes</li><li>Substance Use History</li></ul>');
	$('#sudAll').tooltip(); 

	setTimeout(function(){
		whenCHAOMAP();
	}, 1000);
});

//Auto populate message for Outreach and default to CHA/OMAP if not
var programID;

function checkPayerDefault(){
	if(programID != 138){
		if($('#recipientSenderType').closest('table').parent().find('select').val() == $('#recipientSenderType').closest('table').parent().find('option').filter(function (){ return $(this).html() == 'Payer'}).val()){
			if($('#payerName').closest('table').parent().find('input').val() == ''){
				$('.payerDriver').closest('table').parent().find('select').val($('.payerDriver').closest('table').parent().find('option').filter(function (){ return $(this).html() == 'CHA/OMAP'}).val());
				$('.payerDriver').closest('table').parent().find('select').trigger('change');
			}
		}
	}
}

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
		if(formState == 'new'){

		}
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

	checkPayerDefault();
	checkOutreach();
	//checkProgram();
	$('#recipientSenderType').closest('table').parent().find('select').change(checkPayerDefault);
	$('tr').has('div[class*=providerDriver]').find('select').change(checkOutreach);
});

//Create Other Option for Payer
function createOtherOption(){
	let otherOption = document.createElement('option');
	otherOption.value = 'other';
	otherOption.text = 'Other Payer';

	let payerSelect = document.querySelector('#payerSelect').closest('table').querySelector('select');

	payerSelect.appendChild(otherOption);
}

function handleOtherOption(){
	let payerSelect = document.querySelector('#payerSelect').closest('table').querySelector('select');

	if(payerSelect.value === 'other'){
		clearDropdowns();
		document.querySelector('#payerName').closest('table').querySelector('input').value = '';
		[...document.querySelectorAll('.payerPassengerText')].forEach((passenger) => {
			passenger.closest('table').querySelector('input').value = '';
		});
		document.querySelector('.payerEmail').closest('table').querySelector('input').value = '';
		visibility('hide', '#payerName');
		visibility('hide', '.payerPassengerText');
		visibility('hide', '.payerEmail');
		visibility('show', '.hideMe');
		visibility('show', '#otherName', true);
	}else if(payerSelect.value != 'other' && payerSelect.value != ''){
		visibility('show', '#payerName');
		visibility('show', '.payerPassengerText');
		visibility('show', '.payerEmail');
		visibility('hide', '.hideMe');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let payerSelect = document.querySelector('#payerSelect').closest('table').querySelector('select');
	
	createOtherOption();

	document.querySelector('#payerSelect').closest('table').querySelector('select').addEventListener('change', handleOtherOption);
	document.querySelector('#payerSelect').closest('table').querySelector('select').addEventListener('mouseleave', handleOtherOption);
});

//Make uneditable, remove dropdown arrow
function makeDropDownReadOnly(){
    $('tr').has('div[class*=passenger]').find('select').attr('style', '-webkit-appearance: none; text-indent: 1px; pointer-events: none;');
}

///Debug Test
function debugTest(){
	visibility('show', '.hideMe');

	visibility('show', '.payerDriver');

	visibility('show', '.payerPassenger');

	visibility('show', '.providerDriver');

	visibility('show', '.providerPassenger');



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
}*/