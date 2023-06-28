// Initialize Firebase with your configuration
var firebaseConfig = {
      apiKey: "AIzaSyBvi0SlOG89VkMfmWFP94sVLHBn7TUXzIw",
	  authDomain: "partners-d11b9.firebaseapp.com",
      databaseURL: "https://partners-d11b9-default-rtdb.firebaseio.com",
      projectId: "partners-d11b9",
      storageBucket: "partners-d11b9.appspot.com",
      messagingSenderId: "826315710700",
      appId: "1:826315710700:web:b3c151c623680605cbc5c9"
};
firebase.initializeApp(firebaseConfig);

function login() {
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to the appropriate dashboard page after successful login
      var user = userCredential.user;
      if (user.email === "aircoms@extenteampartners.com") {
        window.location.href = "aircommunities.html";
      } else if (user.email === "aspace@extenteampartners.com") {
        window.location.href = "aspace.html";
	  } else if (user.email === "alexanderfi@extenteampartners.com") {
        window.location.href = "alexanderforrestinvestments.html";
	  } else if (user.email === "ajackson@extenteampartners.com") {
        window.location.href = "apexjackson.html";
	  } else if (user.email === "atlanticvh@extenteampartners.com") {
        window.location.href = "atlanticvacationhomes.html";
	  } else if (user.email === "awaysisr@extenteampartners.com") {
        window.location.href = "awaysisrentals.html";
	  } else if (user.email === "beachnestvr@extenteampartners.com") {
        window.location.href = "beachnestvacationrentals.html";
	  } else if (user.email === "bigbearcabins@extenteampartners.com") {
        window.location.href = "bigbearcabins.html";
	  } else if (user.email === "brettrobinson@extenteampartners.com") {
        window.location.href = "brettrobinson.html";
	  } else if (user.email === "brettonwoods@extenteampartners.com") {
        window.location.href = "brettonwoods.html";
	  } else if (user.email === "brixre@extenteampartners.com") {
        window.location.href = "brixrealestate.html";
	  } else if (user.email === "carolinam@extenteampartners.com") {
        window.location.href = "carolinamornings.html";
	  } else if (user.email === "casiola@extenteampartners.com") {
        window.location.href = "casiola.html";
	  } else if (user.email === "castlehg@extenteampartners.com") {
        window.location.href = "castlehospitalitygroup.html";
	  } else if (user.email === "ciirus@extenteampartners.com") {
        window.location.href = "ciirus.html";
	  } else if (user.email === "citylifepgh@extenteampartners.com") {
        window.location.href = "citylifepgh.html";
	  } else if (user.email === "cocoplum@extenteampartners.com") {
        window.location.href = "cocoplum.html";
	  } else if (user.email === "cottagesotk@extenteampartners.com") {
        window.location.href = "cottagesonthekey.html";
	  } else if (user.email === "currenttides@extenteampartners.com") {
        window.location.href = "currenttides.html";
	  } else if (user.email === "cvgcapital@extenteampartners.com") {
        window.location.href = "cvgcapitalllc.html";
	  } else if (user.email === "dreamvr@extenteampartners.com") {
        window.location.href = "dreamvacationrentals.html";
	  } else if (user.email === "elitepacific@extenteampartners.com") {
        window.location.href = "elitepacific.html";
	  } else if (user.email === "emrvr@extenteampartners.com") {
        window.location.href = "emrvacationrentals.html";
	  } else if (user.email === "equityr@extenteampartners.com") {
        window.location.href = "equityresidential.html";
	  } else if (user.email === "familytimevr@extenteampartners.com") {
        window.location.href = "familytimevacationrentals.html";
	  } else if (user.email === "finedine@extenteampartners.com") {
        window.location.href = "finedine.html";
	  } else if (user.email === "fivestarlt@extenteampartners.com") {
        window.location.href = "fivestarluxurytravel.html";
	  } else if (user.email === "floridaspirit@extenteampartners.com") {
        window.location.href = "floridaspirit.html";
	  } else if (user.email === "floridavh@extenteampartners.com") {
        window.location.href = "floridavacationhomes.html";
	  } else if (user.email === "getawayvr@extenteampartners.com") {
        window.location.href = "getawayvacationrentals.html";
	  } else if (user.email === "goodnightstay@extenteampartners.com") {
        window.location.href = "goodnightstay.html";
	  } else if (user.email === "grandwelcome@extenteampartners.com") {
        window.location.href = "grandwelcome.html";
	  } else if (user.email === "harrisonandlear@extenteampartners.com") {
        window.location.href = "harrisonandlearinc.html";
	  } else if (user.email === "hazelrige@extenteampartners.com") {
        window.location.href = "hazelrigenterprises.html";
	  } else if (user.email === "holidayi@extenteampartners.com") {
        window.location.href = "holidayisle.html";
	  } else if (user.email === "homesweethudson@extenteampartners.com") {
        window.location.href = "homesweethudson.html";
	  } else if (user.email === "homesteadm@extenteampartners.com") {
        window.location.href = "homesteadmodern.html";
	  } else if (user.email === "ionpm@extenteampartners.com") {
        window.location.href = "ionpropertymanagement.html";
	  } else if (user.email === "islandrentals@extenteampartners.com") {
        window.location.href = "islandrentals.html";
	  } else if (user.email === "itripp@extenteampartners.com") {
        window.location.href = "itripp.html";
	  } else if (user.email === "jbyt@extenteampartners.com") {
        window.location.href = "justbringyourtoothbrush.html";
	  } else if (user.email === "jzvr@extenteampartners.com") {
        window.location.href = "jzvacationrentals.html";
	  } else if (user.email === "konacoast@extenteampartners.com") {
        window.location.href = "konacoast.html";
	  } else if (user.email === "libertyhills@extenteampartners.com") {
        window.location.href = "libertyhills.html";
	  } else if (user.email === "livethatch@extenteampartners.com") {
        window.location.href = "livethatch.html";
	  } else if (user.email === "lmpm@extenteampartners.com") {
        window.location.href = "lmpm.html";
	  } else if (user.email === "lodgewell@extenteampartners.com") {
        window.location.href = "lodgewell.html";
	  } else if (user.email === "magicalvh@extenteampartners.com") {
        window.location.href = "magicvacationhomes.html";
	  } else if (user.email === "mauiparadise@extenteampartners.com") {
        window.location.href = "mauiparadise.html";
	  } else if (user.email === "mavericks@extenteampartners.com") {
        window.location.href = "mavericksuites.html";
	  } else if (user.email === "mclean@extenteampartners.com") {
        window.location.href = "mcleanstaypoppy.html";
	  } else if (user.email === "mcmpm@extenteampartners.com") {
        window.location.href = "mcmpropertymanagement.html";
	  } else if (user.email === "metacoastal@extenteampartners.com") {
        window.location.href = "metacoastal.html";
	  } else if (user.email === "mhrog@extenteampartners.com") {
        window.location.href = "mountainhomerentalsofgeorgia.html";
	  } else if (user.email === "muskokacm@extenteampartners.com") {
        window.location.href = "muskokacottagemanagement.html";
	  } else if (user.email === "mbeachgetways@extenteampartners.com") {
        window.location.href = "mybeachgetaways.html";
	  } else if (user.email === "necds@extenteampartners.com") {
        window.location.href = "necdisplaysolutions.html";
	  } else if (user.email === "nextgenlodge@extenteampartners.com") {
        window.location.href = "nextgenlodge.html";
	  } else if (user.email === "nwhosting@extenteampartners.com") {
        window.location.href = "nwhostingllc.html";
	  } else if (user.email === "olap@extenteampartners.com") {
        window.location.href = "olaproperties.html";
	  } else if (user.email === "orav@extenteampartners.com") {
        window.location.href = "orlandorentavilla.html";
	  } else if (user.email === "outpost@extenteampartners.com") {
        window.location.href = "outpost.html";
	  } else if (user.email === "paradiseinhawaiilh@extenteampartners.com") {
        window.location.href = "paradiseinhawaiiluxuryhomes.html";
	  } else if (user.email === "petekeyp@extenteampartners.com") {
        window.location.href = "petekeyproperties.html";
	  } else if (user.email === "prestigevr@extenteampartners.com") {
        window.location.href = "prestigevr.html";
	  } else if (user.email === "reblrentals@extenteampartners.com") {
        window.location.href = "reblrentals.html";
	  } else if (user.email === "redbarnv@extenteampartners.com") {
        window.location.href = "redbarnvacations.html";
	  } else if (user.email === "rentbuttonar@extenteampartners.com") {
        window.location.href = "rentbuttonandrentals.html";
	  } else if (user.email === "rpofangelfire@extenteampartners.com") {
        window.location.href = "resortpropertiesofangelfire.html";
	  } else if (user.email === "riverridger@extenteampartners.com") {
        window.location.href = "riverridgerentals.html";
	  } else if (user.email === "roelens@extenteampartners.com") {
        window.location.href = "roelens.html";
	  } else if (user.email === "safervrs@extenteampartners.com") {
        window.location.href = "safervrs.html";
	  } else if (user.email === "seascapep@extenteampartners.com") {
        window.location.href = "seascapeproperties.html";
	  } else if (user.email === "sscv@extenteampartners.com") {
        window.location.href = "seastarcoastalvacations.html";
	  } else if (user.email === "seabreeze@extenteampartners.com") {
        window.location.href = "smdcapitalgroup.html";
	  } else if (user.email === "smdcg@extenteampartners.com") {
        window.location.href = "smdcapitalgroup.html";
	  } else if (user.email === "sccr@extenteampartners.com") {
        window.location.href = "southerncomfortcabinrentals.html";
	  } else if (user.email === "ssibrentals@extenteampartners.com") {
        window.location.href = "stsimonislandbeachrentals.html";
	  } else if (user.email === "stayduvet@extenteampartners.com") {
        window.location.href = "stayduvet.html";
	  } else if (user.email === "stayfloreo@extenteampartners.com") {
        window.location.href = "stayfloreo.html";
	  } else if (user.email === "staymontana@extenteampartners.com") {
        window.location.href = "staymontana.html";
	  } else if (user.email === "stayporter@extenteampartners.com") {
        window.location.href = "stayporter.html";
	  } else if (user.email === "stayrighteous@extenteampartners.com") {
        window.location.href = "stayrighteous.html";
	  } else if (user.email === "stripviews@extenteampartners.com") {
        window.location.href = "stripviewsuites.html";
	  } else if (user.email === "summitrentals@extenteampartners.com") {
        window.location.href = "summitrentals.html";
	  } else if (user.email === "tahoeme@extenteampartners.com") {
        window.location.href = "tahoemountainexperience.html";
	  } else if (user.email === "tahoesp@extenteampartners.com") {
        window.location.href = "tahoesignatureproperties.html";
	  } else if (user.email === "tailwind@extenteampartners.com") {
        window.location.href = "tailwind.html";
	  } else if (user.email === "thompsonpmg@extenteampartners.com") {
        window.location.href = "thompsonpmgroupllc.html";
	  } else if (user.email === "townspm@extenteampartners.com") {
        window.location.href = "townspropertymanagement.html";
	  } else if (user.email === "tropicalescapevh@extenteampartners.com") {
        window.location.href = "tropicalescapevacationhomes.html";
	  } else if (user.email === "urbanstay@extenteampartners.com") {
        window.location.href = "urbanstay.html";
	  } else if (user.email === "vhohiltonhead@extenteampartners.com") {
        window.location.href = "vacationhomesofhiltonhead.html";
	  } else if (user.email === "vintory@extenteampartners.com.com") {
        window.location.href = "vintory.html";
	  } else if (user.email === "vr365@extenteampartners.com") {
        window.location.href = "vr365.html";
	  } else if (user.email === "walkerluxuryvr@extenteampartners.com") {
        window.location.href = "walkerluxuryvacationrentals.html";
	  } else if (user.email === "ziprent@extenteampartners.com") {
        window.location.href = "ziprent.html";
      }
    })
    .catch((error) => {
      // Handle sign-in errors
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
}


document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    login();
  }
});
