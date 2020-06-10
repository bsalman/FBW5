// dummy data for testing and to build the ui or front end 
let availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

$( function() {
    

    // add keyup event to the input
$('#productInput').keyup(function (e) { 
    //console.log($(this).val());
    let keyWord = $(this).val();
    // check if the input value length => 3
    if(keyWord.length >= 2){
        // buld the object that gonna be send to API
        let obj = {
            "requests":[
                {"indexName":"ikea","params":"query="+keyWord+"&hitsPerPage=5&page=1"}
            ]
        };
        // ajax request
        $.ajax({
            type: "POST",
            url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
            data: JSON.stringify(obj),
            dataType: "json",
            success: function (response) {
                // if success call autocomplete function
                let dataset = response.results[0].hits.map(element => element.type)
                //console.log(dataset);
                
                runAutoCompleate(dataset)
            }
        }); 
    } else {
        // $( "#productInput" ).autocomplete( "disable" );

    }
    
    
});
    

    
  } );

  // function will run the auto complete in jquery
  function runAutoCompleate(data) {
      

    $( "#productInput" ).autocomplete({
        source: data,
        classes: {
          "ui-autocomplete": "autocompleteclass"
        },
        messages: {
			noResults: "",
			results: function( amount ) {
				return "";
			}
		}

      });
    }