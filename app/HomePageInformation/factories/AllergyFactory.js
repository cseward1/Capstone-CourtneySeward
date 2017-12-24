// Meta Data from the Yummly App that I hard coded in - didn't understand how to do a "get" request for the meta data
angular
    .module("CapstoneApp")
    .factory("AllergyFactory", function () {
        const allergies = [{

            "allergyName": "Gluten-Free",
            "allergyCode": "393^Gluten-Free"
        },
        {
            "allergyName": "Peanut-Free",
            "allergyCode": "394^Peanut-Free"
        },

        {
            "allergyName": "Seafood-Free",
            "allergyCode": "398^Seafood-Free"
        },

        {
            "allergyName": "Sesame-Free",
            "allergyCode": "399^Sesame-Free"
        },

        {
            "allergyName": "Soy-Free",
            "allergyCode": "400^Soy-Free"
        },

        {
            "allergyName": "Dairy-Free",
            "allergyCode": "396^Dairy-Free"
        },
        {
            "allergyName": "Egg-Free",
            "allergyCode": "397^Egg-Free"
        },

        {
            "allergyName": "Sulfite-Free",
            "allergyCode": "401^Sulfite-Free"
        },

        {
            "allergyName": "Tree Nut-Free",
            "allergyCode": "395^Tree Nut-Free"
        },

        {
            "allergyName": "Wheat-Free",
            "allergyCode": "92^Wheat-Free"
        },

        {
            "allergyName": "",
            "allergyCode": ""
        }

            // array ends
        ]
        return allergies
// object ends
    })
