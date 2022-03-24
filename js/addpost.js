{
    "name":"addpost",
    "fields":[
    {
        "label":"Title",
        "input": {
            "type":"text",
            "required": true
        }
    },
    {
        "label":"Description",
        "input": {
            "type":"textarea",
            "required":true
        }
    },
    {
        "label":"Image",
        "input": {
            "type":"file",
            "required": true
        }
    },
    {
        "label":"Publish Date",
        "input": {
            "type": "date",
            "required": true
        }
    },
    {
        "label": "Author",
        "input": {
            "type": "text"
        }
    }
],
"references":[
    {
      "input":{
        "type":"checkbox",
        "required":true,
        "checked":"false"
      }
    },
    {
        "text without ref":"View Author Post",
        "text":"View Author Post",
        "ref":"viewauthor"
    }
  ],
    "buttons":[
    {
        "text":"Create Post"
    }
]
}
