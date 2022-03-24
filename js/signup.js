{
    "name":"register",
    "fields":[
    {
        "input":{
            "type":"text",
            "required":true,
            "placeholder":"Enter full name"
        }
    },
    {
        "input":{
            "type":"email",
            "required":true,
            "placeholder":"Enter email"
        }
    },
    {
        "input":{
            "type":"password",
            "required":true,
            "placeholder":"password"
        }
    },
    {
        "input":{
            "type":"password",
            "required":true,
            "placeholder":"Confirm password"
        }
    }
    ],
    "references":[
        {
            "text without ref":"Already have account?",
            "text":"Login",
            "ref":"signin"
        }
    ],
    "buttons":[
    {
        "text":"Sign Up"
    }
]
}