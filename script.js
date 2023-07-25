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
        window.location.href = "./aircommunities";
      } else if (user.email === "aspace@extenteampartners.com") {
        window.location.href = "./aspace";
	  } else if (user.email === "alexanderfi@extenteampartners.com") {
        window.location.href = "./alexanderforrestinvestments";
	  } else if (user.email === "ajackson@extenteampartners.com") {
        window.location.href = "./apexjackson";
	  } else if (user.email === "atlanticvh@extenteampartners.com") {
        window.location.href = "./atlanticvacationhomes";
	  } else if (user.email === "awaysisr@extenteampartners.com") {
        window.location.href = "./awaysisrentals";
	  } else if (user.email === "beachnestvr@extenteampartners.com") {
        window.location.href = "./beachnestvacationrentals";
	  } else if (user.email === "bigbearcabins@extenteampartners.com") {
        window.location.href = "./bigbearcabins";
	  } else if (user.email === "brettrobinson@extenteampartners.com") {
        window.location.href = "./brettrobinson";
	  } else if (user.email === "brettonwoods@extenteampartners.com") {
        window.location.href = "./brettonwoods";
	  } else if (user.email === "brixre@extenteampartners.com") {
        window.location.href = "./brixrealestate";
	  } else if (user.email === "carolinam@extenteampartners.com") {
        window.location.href = "./carolinamornings";
	  } else if (user.email === "casiola@extenteampartners.com") {
        window.location.href = "./casiola";
	  } else if (user.email === "castlehg@extenteampartners.com") {
        window.location.href = "./castlehospitalitygroup";
	  } else if (user.email === "ciirus@extenteampartners.com") {
        window.location.href = "./ciirus";
	  } else if (user.email === "citylifepgh@extenteampartners.com") {
        window.location.href = "./citylifepgh";
	  } else if (user.email === "cocoplum@extenteampartners.com") {
        window.location.href = "./cocoplum";
	  } else if (user.email === "cottagesotk@extenteampartners.com") {
        window.location.href = "./cottagesonthekey";
	  } else if (user.email === "currenttides@extenteampartners.com") {
        window.location.href = "./currenttides";
	  } else if (user.email === "cvgcapital@extenteampartners.com") {
        window.location.href = "./cvgcapitalllc";
	  } else if (user.email === "dreamvr@extenteampartners.com") {
        window.location.href = "./dreamvacationrentals";
	  } else if (user.email === "elitepacific@extenteampartners.com") {
        window.location.href = "./elitepacific";
	  } else if (user.email === "emrvr@extenteampartners.com") {
        window.location.href = "./emrvacationrentals";
	  } else if (user.email === "equityr@extenteampartners.com") {
        window.location.href = "./equityresidential";
	  } else if (user.email === "familytimevr@extenteampartners.com") {
        window.location.href = "./familytimevacationrentals";
	  } else if (user.email === "finedine@extenteampartners.com") {
        window.location.href = "./finedine";
	  } else if (user.email === "fivestarlt@extenteampartners.com") {
        window.location.href = "./fivestarluxurytravel";
	  } else if (user.email === "floridaspirit@extenteampartners.com") {
        window.location.href = "./floridaspirit";
	  } else if (user.email === "floridavh@extenteampartners.com") {
        window.location.href = "./floridavacationhomes";
	  } else if (user.email === "getawayvr@extenteampartners.com") {
        window.location.href = "./getawayvacationrentals";
	  } else if (user.email === "goodnightstay@extenteampartners.com") {
        window.location.href = "./goodnightstay";
	  } else if (user.email === "grandwelcome@extenteampartners.com") {
        window.location.href = "./grandwelcome";
	  } else if (user.email === "harrisonandlear@extenteampartners.com") {
        window.location.href = "./harrisonandlearinc";
	  } else if (user.email === "hazelrige@extenteampartners.com") {
        window.location.href = "./hazelrigenterprises";
	  } else if (user.email === "holidayi@extenteampartners.com") {
        window.location.href = "./holidayisle";
	  } else if (user.email === "homesweethudson@extenteampartners.com") {
        window.location.href = "./homesweethudson";
	  } else if (user.email === "homesteadm@extenteampartners.com") {
        window.location.href = "./homesteadmodern";
	  } else if (user.email === "ionpm@extenteampartners.com") {
        window.location.href = "./ionpropertymanagement";
	  } else if (user.email === "islandrentals@extenteampartners.com") {
        window.location.href = "./islandrentals";
	  } else if (user.email === "itripp@extenteampartners.com") {
        window.location.href = "./itripp";
	  } else if (user.email === "jbyt@extenteampartners.com") {
        window.location.href = "./justbringyourtoothbrush";
	  } else if (user.email === "jzvr@extenteampartners.com") {
        window.location.href = "./jzvacationrentals";
	  } else if (user.email === "konacoast@extenteampartners.com") {
        window.location.href = "./konacoast";
	  } else if (user.email === "libertyhills@extenteampartners.com") {
        window.location.href = "./libertyhills";
	  } else if (user.email === "livethatch@extenteampartners.com") {
        window.location.href = "./livethatch";
	  } else if (user.email === "lmpm@extenteampartners.com") {
        window.location.href = "./lmpm";
	  } else if (user.email === "lodgewell@extenteampartners.com") {
        window.location.href = "./lodgewell";
	  } else if (user.email === "magicalvh@extenteampartners.com") {
        window.location.href = "./magicvacationhomes";
	  } else if (user.email === "mauiparadise@extenteampartners.com") {
        window.location.href = "./mauiparadise";
	  } else if (user.email === "mavericks@extenteampartners.com") {
        window.location.href = "./mavericksuites";
	  } else if (user.email === "mclean@extenteampartners.com") {
        window.location.href = "./mcleanstaypoppy";
	  } else if (user.email === "mcmpm@extenteampartners.com") {
        window.location.href = "./mcmpropertymanagement";
	  } else if (user.email === "metacoastal@extenteampartners.com") {
        window.location.href = "./metacoastal";
	  } else if (user.email === "mhrog@extenteampartners.com") {
        window.location.href = "./mountainhomerentalsofgeorgia";
	  } else if (user.email === "muskokacm@extenteampartners.com") {
        window.location.href = "./muskokacottagemanagement";
	  } else if (user.email === "mbeachgetways@extenteampartners.com") {
        window.location.href = "./mybeachgetaways";
	  } else if (user.email === "necds@extenteampartners.com") {
        window.location.href = "./necdisplaysolutions";
	  } else if (user.email === "nextgenlodge@extenteampartners.com") {
        window.location.href = "./nextgenlodge";
	  } else if (user.email === "nwhosting@extenteampartners.com") {
        window.location.href = "./nwhostingllc";
	  } else if (user.email === "olap@extenteampartners.com") {
        window.location.href = "./olaproperties";
	  } else if (user.email === "orav@extenteampartners.com") {
        window.location.href = "./orlandorentavilla";
	  } else if (user.email === "outpost@extenteampartners.com") {
        window.location.href = "./outpost";
	  } else if (user.email === "paradiseinhawaiilh@extenteampartners.com") {
        window.location.href = "./paradiseinhawaiiluxuryhomes";
	  } else if (user.email === "petekeyp@extenteampartners.com") {
        window.location.href = "./petekeyproperties";
	  } else if (user.email === "prestigevr@extenteampartners.com") {
        window.location.href = "./prestigevr";
	  } else if (user.email === "reblrentals@extenteampartners.com") {
        window.location.href = "./reblrentals";
	  } else if (user.email === "redbarnv@extenteampartners.com") {
        window.location.href = "./redbarnvacations";
	  } else if (user.email === "rentbuttonar@extenteampartners.com") {
        window.location.href = "./rentbuttonandrentals";
	  } else if (user.email === "rpofangelfire@extenteampartners.com") {
        window.location.href = "./resortpropertiesofangelfire";
	  } else if (user.email === "riverridger@extenteampartners.com") {
        window.location.href = "./riverridgerentals";
	  } else if (user.email === "roelens@extenteampartners.com") {
        window.location.href = "./roelens";
	  } else if (user.email === "safervrs@extenteampartners.com") {
        window.location.href = "./safervrs";
	  } else if (user.email === "seascapep@extenteampartners.com") {
        window.location.href = "./seascapeproperties";
	  } else if (user.email === "sscv@extenteampartners.com") {
        window.location.href = "./seastarcoastalvacations";
	  } else if (user.email === "seabreeze@extenteampartners.com") {
        window.location.href = "./smdcapitalgroup";
	  } else if (user.email === "smdcg@extenteampartners.com") {
        window.location.href = "./smdcapitalgroup";
	  } else if (user.email === "sccr@extenteampartners.com") {
        window.location.href = "./southerncomfortcabinrentals";
	  } else if (user.email === "ssibrentals@extenteampartners.com") {
        window.location.href = "./stsimonislandbeachrentals";
	  } else if (user.email === "stayduvet@extenteampartners.com") {
        window.location.href = "./stayduvet";
	  } else if (user.email === "stayfloreo@extenteampartners.com") {
        window.location.href = "./stayfloreo";
	  } else if (user.email === "staymontana@extenteampartners.com") {
        window.location.href = "./staymontana";
	  } else if (user.email === "stayporter@extenteampartners.com") {
        window.location.href = "./stayporter";
	  } else if (user.email === "stayrighteous@extenteampartners.com") {
        window.location.href = "./stayrighteous";
	  } else if (user.email === "stripviews@extenteampartners.com") {
        window.location.href = "./stripviewsuites";
	  } else if (user.email === "summitrentals@extenteampartners.com") {
        window.location.href = "./summitrentals";
	  } else if (user.email === "tahoeme@extenteampartners.com") {
        window.location.href = "./tahoemountainexperience";
	  } else if (user.email === "tahoesp@extenteampartners.com") {
        window.location.href = "./tahoesignatureproperties";
	  } else if (user.email === "tailwind@extenteampartners.com") {
        window.location.href = "./tailwind";
	  } else if (user.email === "thompsonpmg@extenteampartners.com") {
        window.location.href = "./thompsonpmgroupllc";
	  } else if (user.email === "townspm@extenteampartners.com") {
        window.location.href = "./townspropertymanagement";
	  } else if (user.email === "tropicalescapevh@extenteampartners.com") {
        window.location.href = "./tropicalescapevacationhomes";
	  } else if (user.email === "urbanstay@extenteampartners.com") {
        window.location.href = "./urbanstay";
	  } else if (user.email === "vhohiltonhead@extenteampartners.com") {
        window.location.href = "./vacationhomesofhiltonhead";
	  } else if (user.email === "vintory@extenteampartners.com.com") {
        window.location.href = "./vintory";
	  } else if (user.email === "vr365@extenteampartners.com") {
        window.location.href = "./vr365";
	  } else if (user.email === "walkerluxuryvr@extenteampartners.com") {
        window.location.href = "./walkerluxuryvacationrentals";
	  } else if (user.email === "ziprent@extenteampartners.com") {
        window.location.href = "./ziprent";
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
